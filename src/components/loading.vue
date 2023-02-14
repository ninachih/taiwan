<template>
    <div id="loading">
        <div class="sbl-circ-path"></div>
    </div>
</template>

<script>
    export default {
      name: "loading",
    };
</script>
<style lang="scss">
    #loading{
        position:fixed;
        width:100%;
        height:100vh;
        z-index:5000;
        background:rgba(255,255,255,0.8);
        text-align: center;
        left:0;top:0;
        .sbl-circ-path {
            height: 48px;
            width: 48px;
            color: rgba(35, 167, 156, 0.2);
            position: relative;
            display: inline-block;
            border: 5px solid;
            border-radius: 50%;
            border-right-color: #23a79c;
            animation: rotate 1s linear infinite; 
            top:45%;
        }
    }
    
  @keyframes rotate {
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg); } }
</style>