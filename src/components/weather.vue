<template>
  <div class="weather">
	  <div class="weather-bg" :style="{background:'url('+backimg+')'}"></div>
	  <div class="weather-shadom">
    <div :class="weatcher"></div>
	  </div>
    <!-- <div class="cloudy"></div>
		<div class="rainy"></div>
		<div class="snowy"></div>
		<div class="rainbow"></div>
		<div class="starry"></div>
    <div class="stormy"></div>-->
	<div class="descriptionWrapper">
    <div class="temperatureWrapper">
      12°
    </div>
    <div class="infoWrapper">
      风速: E 7 km/h <br/> 湿度: 87%
    </div>
    <div class="dateWrapper">
      <div class="line">
        温度： 21° / 9°
      </div>
      <div class="line">
        日期： 10 / 10
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
	  weatcher: "sunny",
	  weatherList:["sunny","cloudy","rainy","snowy","rainbow","starry","stormy"],
	  backimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567255095982&di=5a80fdcda514e1d18105eb57d6cb7d9e&imgtype=0&src=http%3A%2F%2Fimg.hao661.com%2Fqq.hao661.com%2Fuploads%2Fallimg%2F150710%2F03195135H-0.jpg'
    };
  },
  computed: {
 
  },
  methods: {
   
  },mounted(){
	  this.weatcher=this.weatherList[4]
  }
};
</script>
<style scoped>
.weather {
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  height: 400px;
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.weather-bg{
    position: absolute;
    top: 0;
    height: 300px;
	width: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;

}
.weather-shadom{
	position: absolute;
    left: 26%;
	top: 71px;
	width: 150px;
	height: 100px;
	background: rgba(0, 0, 0, 0.25);
	
}
.descriptionWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 15px 20px;
  width: 100%;
  color: #394568;
  font-weight: ligher;
  z-index: 20;
}
.descriptionWrapper .temperatureWrapper {
  font-size: 45px;
  padding-right: 10px;
}
.descriptionWrapper .infoWrapper {
  font-size: 15px;
  padding-right: 65px;
}
.descriptionWrapper .dateWrapper {
  text-transform: uppercase;
  font-size: 15px;
}
/* SUNNY */
.sunny {
  animation: sunny 15s linear infinite;
  background: linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 140px;
  width: 20px;
  margin-left: -15px;
  position: absolute;
    left: 50%;
 top: 30px;
}
.sunny:before {
  background: linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 140px;
  width: 20px;
  opacity: 1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: rotate(90deg);
}
.sunny:after {
  background: #ffee44;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 0, 0.2) 0 0 0 15px;
  content: "";
  height: 80px;
  width: 80px;
  position: absolute;
  left: -30px;
  top: 30px;
}

@keyframes sunny {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* CLOUDY */
.cloudy {
  animation: cloudy 5s ease-in-out infinite;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: #ffffff 65px -15px 0 -5px, #ffffff 25px -25px, #ffffff 30px 10px,
    #ffffff 60px 15px 0 -10px, #ffffff 85px 5px 0 -5px;
  height: 50px;
  width: 50px;
  margin-left: -60px;
  position: absolute;
    left: 50%;
top: 30px;
}
.cloudy:after {
  animation: cloudy_shadow 5s ease-in-out infinite;
  background: #000000;
  border-radius: 50%;
  content: "";
  height: 15px;
  width: 120px;
  opacity: 0.2;
  position: absolute;
  left: 5px;
  bottom: -60px;
  transform: scale(0.7);
}

@keyframes cloudy {
  50% {
    transform: translateY(-20px);
  }
}

@keyframes cloudy_shadow {
  50% {
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}

/* RAINY */
.rainy {
  animation: rainy 5s ease-in-out infinite 1s;
  background: #cccccc;
  border-radius: 50%;
  box-shadow: #cccccc 65px -15px 0 -5px, #cccccc 25px -25px, #cccccc 30px 10px,
    #cccccc 60px 15px 0 -10px, #cccccc 85px 5px 0 -5px;
  display: block;
  height: 50px;
  width: 50px;
  margin-left: -60px;
  position: absolute;
 left: 50%;
top: 30px;
}
.rainy:after {
  animation: rainy_shadow 5s ease-in-out infinite 1s;
  background: #000000;
  border-radius: 50%;
  content: "";
  height: 15px;
  width: 120px;
  opacity: 0.2;
  position: absolute;
  left: 5px;
  bottom: -60px;
  transform: scale(0.7);
}
.rainy:before {
  animation: rainy_rain 0.7s infinite linear;
  content: "";
  background: #cccccc;
  border-radius: 50%;
  display: block;
  height: 6px;
  width: 3px;
  opacity: 0.3;
  transform: scale(0.9);
}

@keyframes rainy {
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rainy_shadow {
  50% {
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}
@-webkit-keyframes rainy_rain {
  0% {
    box-shadow: rgba(0, 0, 0, 0) 30px 30px, rgba(0, 0, 0, 0) 40px 40px,
      #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
      #000 110px 45px, #000 90px 35px;
  }
  25% {
    box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
      rgba(0, 0, 0, 0) 70px 120px, rgba(0, 0, 0, 0) 80px 120px, #000 110px 70px,
      #000 90px 60px;
  }
  26% {
    box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
      rgba(0, 0, 0, 0) 70px 40px, rgba(0, 0, 0, 0) 80px 20px, #000 110px 70px,
      #000 90px 60px;
  }
  50% {
    box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 100px,
      #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
      #000 90px 85px;
  }
  51% {
    box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 45px,
      #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
      #000 90px 85px;
  }
  75% {
    box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
      rgba(0, 0, 0, 0) 55px 95px, #000 70px 80px, #000 80px 70px,
      rgba(0, 0, 0, 0) 110px 120px, rgba(0, 0, 0, 0) 90px 110px;
  }
  76% {
    box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
      rgba(0, 0, 0, 0) 55px 35px, #000 70px 80px, #000 80px 70px,
      rgba(0, 0, 0, 0) 110px 25px, rgba(0, 0, 0, 0) 90px 15px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0) 30px 120px, rgba(0, 0, 0, 0) 40px 120px,
      #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
      #000 110px 45px, #000 90px 35px;
  }
}
@keyframes rainy_rain {
  0% {
    box-shadow: rgba(0, 0, 0, 0) 30px 30px, rgba(0, 0, 0, 0) 40px 40px,
      #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
      #000 110px 45px, #000 90px 35px;
  }
  25% {
    box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
      rgba(0, 0, 0, 0) 70px 120px, rgba(0, 0, 0, 0) 80px 120px, #000 110px 70px,
      #000 90px 60px;
  }
  26% {
    box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
      rgba(0, 0, 0, 0) 70px 40px, rgba(0, 0, 0, 0) 80px 20px, #000 110px 70px,
      #000 90px 60px;
  }
  50% {
    box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 100px,
      #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
      #000 90px 85px;
  }
  51% {
    box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 45px,
      #000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
      #000 90px 85px;
  }
  75% {
    box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
      rgba(0, 0, 0, 0) 55px 95px, #000 70px 80px, #000 80px 70px,
      rgba(0, 0, 0, 0) 110px 120px, rgba(0, 0, 0, 0) 90px 110px;
  }
  76% {
    box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
      rgba(0, 0, 0, 0) 55px 35px, #000 70px 80px, #000 80px 70px,
      rgba(0, 0, 0, 0) 110px 25px, rgba(0, 0, 0, 0) 90px 15px;
  }
  100% {
    box-shadow: rgba(0, 0, 0, 0) 30px 120px, rgba(0, 0, 0, 0) 40px 120px,
      #000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
      #000 110px 45px, #000 90px 35px;
  }
}

/* RAINBOW */
.rainbow {
  -webkit-animation: rainbow 5s ease-in-out infinite;
  animation: rainbow 5s ease-in-out infinite;
  border-radius: 170px 0 0 0;
  box-shadow: #fb323c -2px -2px 0 1px, #f99716 -4px -4px 0 3px,
    #fee124 -6px -6px 0 5px, #afdf2e -8px -8px 0 7px, #6ad7f8 -10px -10px 0 9px,
    #60b1f5 -12px -12px 0 11px, #a3459b -14px -14px 0 13px;
  height: 70px;
  width: 70px;
  margin-left: -40px;
  position: absolute;
left: 50%;
 top: 30px;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
}
.rainbow:after {
  -webkit-animation: rainbow_shadow 5s ease-in-out infinite;
  animation: rainbow_shadow 5s ease-in-out infinite;
  background: #000000;
  border-radius: 50%;
  content: "";
  opacity: 0.2;
  height: 15px;
  width: 120px;
  position: absolute;
  bottom: -23px;
  left: 17px;
  -webkit-transform: rotate(-40deg);
  -ms-transform: rotate(-40deg);
  transform: rotate(-40deg);
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
@-webkit-keyframes rainbow {
  50% {
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
  }
}
@keyframes rainbow {
  50% {
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
  }
}
@-webkit-keyframes rainbow_shadow {
  50% {
    -webkit-transform: rotate(-50deg) translate(10px) scale(0.7);
    transform: rotate(-50deg) translate(10px) scale(0.7);
    opacity: 0.05;
  }
}
@keyframes rainbow_shadow {
  50% {
    -webkit-transform: rotate(-50deg) translate(10px) scale(0.7);
    transform: rotate(-50deg) translate(10px) scale(0.7);
    opacity: 0.05;
  }
}

/* STARRY */
.starry {
  -webkit-animation: starry_star 5s ease-in-out infinite;
  animation: starry_star 5s ease-in-out infinite;
  background: #fff;
  border-radius: 50%;
  box-shadow: #ffffff 26px 7px 0 -1px,
    rgba(255, 255, 255, 0.1) -36px -19px 0 -1px,
    rgba(255, 255, 255, 0.1) -51px -34px 0 -1px, #ffffff -52px -62px 0 -1px,
    #ffffff 14px -37px, rgba(255, 255, 255, 0.1) 41px -19px, #ffffff 34px -50px,
    rgba(255, 255, 255, 0.1) 14px -71px 0 -1px, #ffffff 64px -21px 0 -1px,
    rgba(255, 255, 255, 0.1) 32px -85px 0 -1px, #ffffff 64px -90px,
    rgba(255, 255, 255, 0.1) 60px -67px 0 -1px, #ffffff 34px -127px,
    rgba(255, 255, 255, 0.1) -26px -103px 0 -1px;
  height: 4px;
  width: 4px;
  margin-left: -10px;
  opacity: 1;
  position: absolute;
     left: 50%;
top: 30px;
}
.starry:after {
  -webkit-animation: starry 5s ease-in-out infinite;
  animation: starry 5s ease-in-out infinite;
  border-radius: 50%;
  box-shadow: #ffffff -25px 0;
  content: "";
  height: 100px;
  width: 100px;
  position: absolute;
  top: -106px;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  -webkit-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  transform-origin: 0 50%;
}

@-webkit-keyframes starry {
  50% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}

@keyframes starry {
  50% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@-webkit-keyframes starry_star {
  50% {
    box-shadow: rgba(255, 255, 255, 0.1) 26px 7px 0 -1px,
      #ffffff -36px -19px 0 -1px, #ffffff -51px -34px 0 -1px,
      rgba(255, 255, 255, 0.1) -52px -62px 0 -1px,
      rgba(255, 255, 255, 0.1) 14px -37px, #ffffff 41px -19px,
      rgba(255, 255, 255, 0.1) 34px -50px, #ffffff 14px -71px 0 -1px,
      rgba(255, 255, 255, 0.1) 64px -21px 0 -1px, #ffffff 32px -85px 0 -1px,
      rgba(255, 255, 255, 0.1) 64px -90px, #ffffff 60px -67px 0 -1px,
      rgba(255, 255, 255, 0.1) 34px -127px, #ffffff -26px -103px 0 -1px;
  }
}
@keyframes starry_star {
  50% {
    box-shadow: rgba(255, 255, 255, 0.1) 26px 7px 0 -1px,
      #ffffff -36px -19px 0 -1px, #ffffff -51px -34px 0 -1px,
      rgba(255, 255, 255, 0.1) -52px -62px 0 -1px,
      rgba(255, 255, 255, 0.1) 14px -37px, #ffffff 41px -19px,
      rgba(255, 255, 255, 0.1) 34px -50px, #ffffff 14px -71px 0 -1px,
      rgba(255, 255, 255, 0.1) 64px -21px 0 -1px, #ffffff 32px -85px 0 -1px,
      rgba(255, 255, 255, 0.1) 64px -90px, #ffffff 60px -67px 0 -1px,
      rgba(255, 255, 255, 0.1) 34px -127px, #ffffff -26px -103px 0 -1px;
  }
}

/* STORMY */
.stormy {
  -webkit-animation: stormy 5s ease-in-out infinite;
  animation: stormy 5s ease-in-out infinite;
  background: #222222;
  border-radius: 50%;
  box-shadow: #222222 65px -15px 0 -5px, #222222 25px -25px, #222222 30px 10px,
    #222222 60px 15px 0 -10px, #222222 85px 5px 0 -5px;
  height: 50px;
  width: 50px;
  margin-left: -60px;
  position: absolute;
     left: 50%;
 top: 30px;
}
.stormy:after {
  -webkit-animation: stormy_shadow 5s ease-in-out infinite;
  animation: stormy_shadow 5s ease-in-out infinite;
  background: #000;
  border-radius: 50%;
  content: "";
  height: 15px;
  width: 120px;
  opacity: 0.2;
  position: absolute;
  left: 5px;
  bottom: -60px;
  -webkit-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
}
.stormy:before {
  -webkit-animation: stormy_thunder 2s steps(1, end) infinite;
  animation: stormy_thunder 2s steps(1, end) infinite;
  border-left: 0px solid transparent;
  border-right: 7px solid transparent;
  border-top: 43px solid yellow;
  box-shadow: yellow -7px -32px;
  content: "";
  display: block;
  height: 0;
  width: 0;
  position: absolute;
  left: 57px;
  top: 70px;
  -webkit-transform: rotate(14deg);
  -ms-transform: rotate(14deg);
  transform: rotate(14deg);
  -webkit-transform-origin: 50% -60px;
  -ms-transform-origin: 50% -60px;
  transform-origin: 50% -60px;
}
@-webkit-keyframes stormy {
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@keyframes stormy {
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-webkit-keyframes stormy_shadow {
  50% {
    -webkit-transform: translateY(20px) scale(1);
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}
@keyframes stormy_shadow {
  50% {
    -webkit-transform: translateY(20px) scale(1);
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}
@-webkit-keyframes stormy_thunder {
  0% {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    opacity: 1;
  }
  5% {
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    opacity: 1;
  }
  10% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  15% {
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    opacity: 0;
  }
}
@keyframes stormy_thunder {
  0% {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    opacity: 1;
  }
  5% {
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    opacity: 1;
  }
  10% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  15% {
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    opacity: 0;
  }
}

/* SNOWY */
.snowy {
  -webkit-animation: snowy 5s ease-in-out infinite 1s;
  animation: snowy 5s ease-in-out infinite 1s;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: #ffffff 65px -15px 0 -5px, #ffffff 25px -25px, #ffffff 30px 10px,
    #ffffff 60px 15px 0 -10px, #ffffff 85px 5px 0 -5px;
  display: block;
  height: 50px;
  width: 50px;
  margin-left: -60px;
  position: absolute;
     left: 50%;
 top: 30px;
}
.snowy:after {
  -webkit-animation: snowy_shadow 5s ease-in-out infinite 1s;
  animation: snowy_shadow 5s ease-in-out infinite 1s;
  background: #000000;
  border-radius: 50%;
  content: "";
  height: 15px;
  width: 120px;
  opacity: 0.2;
  position: absolute;
  left: 8px;
  bottom: -60px;
  -webkit-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
}
.snowy:before {
  -webkit-animation: snowy_snow 2s infinite linear;
  animation: snowy_snow 2s infinite linear;
  content: "";
  border-radius: 50%;
  display: block;
  height: 7px;
  width: 7px;
  opacity: 0.8;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
@-webkit-keyframes snowy {
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@keyframes snowy {
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-webkit-keyframes snowy_shadow {
  50% {
    -webkit-transform: translateY(20px) scale(1);
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}
@keyframes snowy_shadow {
  50% {
    -webkit-transform: translateY(20px) scale(1);
    transform: translateY(20px) scale(1);
    opacity: 0.05;
  }
}
@-webkit-keyframes snowy_snow {
  0% {
    box-shadow: rgba(238, 238, 238, 0) 30px 30px,
      rgba(238, 238, 238, 0) 40px 40px, #eeeeee 50px 75px, #eeeeee 55px 50px,
      #eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
      #eeeeee 90px 35px;
  }
  25% {
    box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
      #eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 120px,
      rgba(238, 238, 238, 0) 80px 120px, #eeeeee 110px 70px, #eeeeee 90px 60px;
  }
  26% {
    box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
      #eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 40px,
      rgba(238, 238, 238, 0) 80px 20px, #eeeeee 110px 70px, #eeeeee 90px 60px;
  }
  50% {
    box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
      rgba(238, 238, 238, 0) 50px 100px, #eeeeee 55px 80px, #eeeeee 70px 60px,
      #eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
  }
  51% {
    box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
      rgba(238, 238, 238, 0) 50px 45px, #eeeeee 55px 80px, #eeeeee 70px 60px,
      #eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
  }
  75% {
    box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
      rgba(238, 238, 238, 0) 55px 95px, #eeeeee 70px 80px, #eeeeee 80px 70px,
      rgba(238, 238, 238, 0) 110px 120px, rgba(238, 238, 238, 0) 90px 110px;
  }
  76% {
    box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
      rgba(238, 238, 238, 0) 55px 35px, #eeeeee 70px 80px, #eeeeee 80px 70px,
      rgba(238, 238, 238, 0) 110px 25px, rgba(238, 238, 238, 0) 90px 15px;
  }
  100% {
    box-shadow: rgba(238, 238, 238, 0) 30px 120px,
      rgba(238, 238, 238, 0) 40px 120px, #eeeeee 50px 75px, #eeeeee 55px 50px,
      #eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
      #eeeeee 90px 35px;
  }
}
@keyframes snowy_snow {
  0% {
    box-shadow: rgba(238, 238, 238, 0) 30px 30px,
      rgba(238, 238, 238, 0) 40px 40px, #eeeeee 50px 75px, #eeeeee 55px 50px,
      #eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
      #eeeeee 90px 35px;
  }
  25% {
    box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
      #eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 120px,
      rgba(238, 238, 238, 0) 80px 120px, #eeeeee 110px 70px, #eeeeee 90px 60px;
  }
  26% {
    box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
      #eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 40px,
      rgba(238, 238, 238, 0) 80px 20px, #eeeeee 110px 70px, #eeeeee 90px 60px;
  }
  50% {
    box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
      rgba(238, 238, 238, 0) 50px 100px, #eeeeee 55px 80px, #eeeeee 70px 60px,
      #eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
  }
  51% {
    box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
      rgba(238, 238, 238, 0) 50px 45px, #eeeeee 55px 80px, #eeeeee 70px 60px,
      #eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
  }
  75% {
    box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
      rgba(238, 238, 238, 0) 55px 95px, #eeeeee 70px 80px, #eeeeee 80px 70px,
      rgba(238, 238, 238, 0) 110px 120px, rgba(238, 238, 238, 0) 90px 110px;
  }
  76% {
    box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
      rgba(238, 238, 238, 0) 55px 35px, #eeeeee 70px 80px, #eeeeee 80px 70px,
      rgba(238, 238, 238, 0) 110px 25px, rgba(238, 238, 238, 0) 90px 15px;
  }
  100% {
    box-shadow: rgba(238, 238, 238, 0) 30px 120px,
      rgba(238, 238, 238, 0) 40px 120px, #eeeeee 50px 75px, #eeeeee 55px 50px,
      #eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
      #eeeeee 90px 35px;
  }
}
</style>

