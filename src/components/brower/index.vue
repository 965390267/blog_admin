<template>
  <div class="browser-stats">
    <div class="big">
      <img src="../../assets/img/brower/chrome.png" />
      <span>48%</span>
    </div>
    <div class="big">
      <img src="../../assets/img/brower/firefox.png" />
      <span>32%</span>
    </div>
    <div class="small">
      <img src="../../assets/img/brower/ie.png" />
      <span>10%</span>
    </div>
    <div class="small">
      <img src="../../assets/img/brower/safari.png" />
      <span>7%</span>
    </div>
    <div class="small">
      <img src="../../assets/img/brower/opera.png" />
      <span>3%</span>
    </div>
  </div>
</template>
<style lang="" scope>
.browser-stats {
  text-align: center;
  color: #4d4d4d;
}
.browser-stats .big {
  display: inline-block;
  width: 49%;
  text-align: center;
  margin: 0 auto 10px auto;
  padding: 0;
}
.browser-stats .big img {
  vertical-align: middle;
  display: block;
  margin: auto;
}
.browser-stats .small {
  display: inline-block;
  width: 32%;
  text-align: center;
}
.browser-stats .small img {
  display: block;
  margin: 0px auto 3px auto;
}
</style>