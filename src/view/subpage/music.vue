<template>
  <div class="music">
    <div class="play-contrals">
      <div class="player-left">
        <div class="player-button last"></div>
        <div class="player-button pause"></div>
        <div class="player-button next"></div>
      </div>
      <div class="player-center">
        <div class="player-info">王菲-流年</div>
        <div class="time-and-progress-wrap">
          <div class="player-time">02:11</div>
          <div class="progress-wrapper">
            <div class="progress-bar-wrap">
              <div class="progress-current-bar"></div>
            </div>
          </div>
          <div class="player-totaltime">02:11</div>
        </div>
      </div>
      <div class="player-right">
        <div class="player-button volume"></div>
        <div class="player-button toggle-layout"></div>
      </div>
    </div>
  </div>
</template>
<style lang="" scope>
.music {
  position: relative;
  height: 100%;
}
/* 播放器控制部分 */
.play-contrals {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.9)
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.9)
  );
  background-repeat: no-repeat;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#e6000000', GradientType=0);
}
.player-left {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
}
.player-center {
  padding-left: 200px;
  padding-right: 200px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.player-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
.player-button {
  height: 90px;
  line-height: 90px;
  height: 100%;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  float: left;
  cursor: pointer;
}
.player-button.last {
  background-image: url("../../assets/img/music/previous.svg");
  background-size: 18px auto;
}
.player-button.pause {
  background-image: url("../../assets/img/music/play.svg");
  background-size: auto 18px;
}
.player-button.next {
  background-image: url("../../assets/img/music/next.svg");
  background-size: 18px auto;
}
.player-button.volume {
  background-image: url("../../assets/img/music/volume-high.svg");
  background-size: 17px auto;
}
.toggle-layout {
  background-image: url("../../assets/img/music/toggle-layout.svg");
  background-size: 20px auto;
}
.player-info {
  color: #fff;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
  position: relative;
  top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.time-and-progress-wrap {
  position: relative;
  margin-top: 30px;
}
.player-time {
  position: absolute;
  top: -4px;
  left: 0;
  font-size: 11px;
  color: #aaa;
}
.player-totaltime {
  position: absolute;
  top: -4px;
  right: 0;
  font-size: 11px;
  color: #aaa;
}
.progress-wrapper {
  padding: 0 40px;
}
.progress-bar-wrap {
  height: 3px;
  background: #aaa;
}
.progress-current-bar {
  width: 90%;
  height: 3px;
  background: #fff;
}
</style>
