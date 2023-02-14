'use strict';

var Common = Common || {};
var
    JSVAR = JSVAR || {},
    CONFIG = Common.Config.Api.Member.V2 || {};

; (function (window, $, JSVAR, CONFIG) {
    Common.UserStatus = (function () {
        var Main = function (options) {

            var logoutTimer;

            var init = function (opts) {
                DOMCache();
                bindEvent(opts);
                initOnce(opts);
            }

            var DOMCache = function () {

            }

            var bindEvent = function (opts) {
                //每 5分鐘更新一次 Token
                $(document).on('scroll click mousemove keyup keypress', _.throttle(function () {
                    let jwtInfo = JSON.parse(sessionStorage.getItem("jwtInfo"));
                    //console.log(new Date(), '觸發更新', jwtInfo);
                    if (jwtInfo) {
                        //console.log(new Date(), '更新TOKEN');
                        refreshToken();
                    }
                }, 1000 * 60 * 5)); //ms * s *m

                // 25 分鐘後提示使用者將要被登出
                $(document).on(
                    'scroll click mousemove keyup keypress',
                    _.debounce(logoutAlert, 1000 * 60 * 5) //ms * s *m
                );
            }

            var initOnce = function (opts) {
                // console.log('Common.UserStatus init');

                //判斷IOS版本<14圖片不使用webp

                let iosVer = iOSversion();
                let isIphone = isiPhone();
                let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                if (iosVer.version <= 14 && isIphone) {
                    $("header,.logo,.step").addClass('belowVersion')

                } else if (iosVer.version <= 14 && isSafari) {
                    $("header,.logo,.step,select,.date,.closeInfo,.arrowDown,.choose,.frmBox").addClass('belowVersion')
                }
                function iOSversion() {
                    let d, v;
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                        d = {
                            status: true,
                            version: parseInt(v[1], 10),
                            info: parseInt(v[1], 10) + '.' + parseInt(v[2], 10) + '.' + parseInt(v[3] || 0, 10)
                        };
                    } else {
                        d = { status: false, version: false, info: '' }
                    }
                    return d;
                }

                function isiPhone() {
                    return (
                        (navigator.platform.indexOf("iPhone") != -1) ||
                        (navigator.platform.indexOf("iPod") != -1)
                    );
                }
            }

            var logoutAlert = function () {
                // 閒置 25分鐘後提醒使用者即將登出，然後開始倒數5分鐘，5分鐘後強制登出。
                //console.log(new Date(), '閒置警告');

                let jwtInfo = JSON.parse(sessionStorage.getItem("jwtInfo"));
                if (jwtInfo) {
                    //console.log(new Date(), '閒置警告 - 觸發');
                    logoutTimer = setTimeout(function () {
                        //console.log(new Date(), '登出');
                        logout(function () {
                            sessionStorage.removeItem('jwtInfo');
                            window.location.href = BASE_URL;
                        });
                    }, 1000 * 30 * 1); //ms * s *m

                    Swal.fire({
                        title: "網頁閒置過久",
                        text: "你好，系統即將於30秒後登出!",
                        icon: 'info',
                        confirmButtonText: '繼續使用'
                    }).then(function () {
                        clearTimeout(logoutTimer);
                    });
                }
            }

            var otpRegister = function (registerData, whenOtpSuccess, whenOtpFail, whenSysFail) {
                ajaxPost(
                    CONFIG.otpRegister,
                    JSON.stringify(registerData),
                    function (res) {
                        if (res.code == 200) {
                            // OTP 發送成功
                            if (whenOtpSuccess) {
                                whenOtpSuccess('register', res);
                            }
                        } else {
                            // OTP 發送異常
                            if (whenOtpFail) {
                                whenOtpFail(res);
                            }
                        }
                    },
                    whenSysFail
                );
            }

            var checkOtpRegister = function (registerData, whenOtpSuccess, whenOtpFail, whenSysFail) {
                ajaxPost(
                    CONFIG.checkOtpRegister,
                    JSON.stringify(registerData),
                    function (res) {
                        if (res.code == 200) {
                            let jwtInfo = res.data;
                            // OTP 驗證成功 
                            if (whenOtpSuccess) {
                                whenOtpSuccess(jwtInfo);
                            }
                        } else {
                            // OTP 驗證失敗
                            if (whenOtpFail) {
                                whenOtpFail(res);
                            }
                        }
                    },
                    whenSysFail
                );
            }

            var otpLogin = function (account, whenOtpSuccess, whenOtpFail, whenSysFail) {
                ajaxPost(
                    CONFIG.otpLogin,
                    JSON.stringify({ account: account }),
                    function (res) {
                        if (res.code == 200) {
                            // OTP 發送成功
                            if (whenOtpSuccess) {
                                whenOtpSuccess('login', res);
                            }
                        } else {
                            // OTP 發送異常
                            if (whenOtpFail) {
                                whenOtpFail(res);
                            }
                        }
                    },
                    function (xhr) {
                        if (whenSysFail) {
                            whenSysFail(xhr);
                        }
                    }
                );
            }

            var checkOtpLogin = function (otpInfo, whenOtpSuccess, whenOtpFail, whenSysFail) {
                ajaxPost(
                    CONFIG.checkOtpLogin,
                    JSON.stringify(otpInfo),
                    function (res) {
                        if (res.code == 200) {
                            let jwtInfo = res.data;
                            // OTP 驗證成功
                            if (whenOtpSuccess) {
                                whenOtpSuccess(jwtInfo);
                            }
                        } else if (res.code == 400) {
                            // OTP 驗證失敗
                            if (whenOtpFail) {
                                whenOtpFail(res);
                            }
                        } else {
                            // OTP 驗證失敗
                            if (whenOtpFail) {
                                whenOtpFail(res);
                            }
                        }
                    },
                    whenSysFail
                );
            }

            var refreshToken = function (callback) {
                $.ajax({
                    type: "GET",
                    url: CONFIG.refreshToken,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                }).done(function (res) {
                    if (res.code == 200) {
                        let jwtInfo = res.data;
                        sessionStorage.setItem('jwtInfo', JSON.stringify(jwtInfo));
                        if (callback) {
                            callback(jwtInfo);
                        }
                    } else {
                        //console.log(res);
                        sessionStorage.removeItem('jwtInfo');
                        if (callback) {
                            callback();
                        }
                    }
                }).fail(function (xhr) {

                });
            }

            var logout = function (callback) {
                // console.log('使用者登出');
                sessionStorage.removeItem('jwtInfo');
                $.ajax({
                    type: "GET",
                    url: CONFIG.logout,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                }).done(function (res) {
                    if (callback) {
                        callback();
                    }
                }).fail(function (xhr) {
                    if (callback) {
                        callback();
                    }
                });
            }

            var isOverflow = function (whenSuccess, whenFail) {
                $.ajax({
                    type: "GET",
                    url: CONFIG.isOverflow + '?token=' + uuid(),
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                }).done(function (res) {
                    if (whenSuccess) {
                        whenSuccess(res);
                    }
                }).fail(function (xhr) {
                    if (whenFail) {
                        whenFail();
                    }
                });
            }

            // Tools
            var ajaxPost = function (API, DATA, successCallback, failCallback, tokenInfo) {
                let cusHeader = {};
                cusHeader['Content-Type'] = 'application/json';
                if (tokenInfo) {
                    cusHeader[tokenInfo.header] = tokenInfo.token;
                }

                $.ajax({
                    type: "POST",
                    url: API,
                    data: DATA,
                    headers: cusHeader,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true
                }).done(function (res) {
                    if (successCallback) {
                        successCallback(res);
                    }
                }).fail(function (xhr) {
                    if (failCallback) {
                        failCallback(xhr);
                    }
                });
            }

            var uuid = function () {
                var d = Date.now();
                if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
                    d += performance.now(); //use high-precision timer if available
                }
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
            }

            // CDP code 埋設
            var useCDP = function (num1, num2, num3, num4, txt1, txtArea, txtGo, txtPage) {
                dos.beaconSend(num1, num2, num3, num4, txt1, txtArea, txtGo, txtPage)
            }

            this.otpRegister = otpRegister;

            this.checkOtpRegister = checkOtpRegister;

            this.otpLogin = otpLogin;

            this.checkOtpLogin = checkOtpLogin;

            this.refreshToken = refreshToken;

            this.logout = logout;

            this.isOverflow = isOverflow;

            this.useCDP = useCDP;

            init(options);

        };
        return Main;
    })();

    $(document).ready(function () {
        Common.UserStatus = new Common.UserStatus();
    });

})(window, jQuery, (JSVAR || {}), (CONFIG || {}));


