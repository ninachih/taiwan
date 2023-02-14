'use strict';

var
    BASE_URL = '/events/FY23_luckydraw/',
    MemeberApiDomain = "https://b2capi-test-gateway.tmnewa.com.tw/ecjapi/member/",
    ActApiDomain = "https://b2capi-test-gateway.tmnewa.com.tw/ecjapi/activity/";
// MemeberApiDomain = "https://b2capi-gateway.tmnewa.com.tw/ecjapi/member/",
// MemeberApiDomain = "https://ecjapi-test.tmnewa.com.tw/member/",
// MemeberApiDomain = "http://127.0.0.1:8083/",

var Common = Common || {};
Common.Config = Common.Config || {};
Common.Config.Api = Common.Config.Api || {};

Common.Config.Api.Member = Common.Config.Api.Member || {};
Common.Config.Api.Member.V2 = {
    // member api
    otpRegister: MemeberApiDomain + 'member/v2/otpRegister',
    checkOtpRegister: MemeberApiDomain + 'member/v2/checkOtpRegister',
    otpLogin: MemeberApiDomain + 'member/v2/otpLogin',
    checkOtpLogin: MemeberApiDomain + 'member/v2/checkOtpLogin',
    refreshToken: MemeberApiDomain + 'member/v2/refreshToken',
    logout: MemeberApiDomain + 'member/v2/logout',
    esunWalletSearch: MemeberApiDomain + 'walletApi/search',
    isOverflow: MemeberApiDomain + 'member/v2/isOverflow'
};

Common.Config.Api.Activity = {
    insertProfile: ActApiDomain + 'coins/v2/insertProfile',
    checkAnswer: ActApiDomain + 'coins/v2/checkAnswer',
    searchReply: ActApiDomain + 'coins/v2/searchReply',
    recordAction: ActApiDomain + 'coins/v2/recordAction',
    showLotteryRecord: ActApiDomain + 'coins/v2/showLotteryRecord',
    lottery: ActApiDomain + 'coins/v2/lottery',
    memberCheck: ActApiDomain + 'coins/v2/memberCheck'
};


