<template>
  <div class="error">
<div class="code">
<p>ERROR 404</p>
</div>
<div class="road">
<div class="shadow">
<div class="shelt">
<div class="head">
<div class="eyes">
<div class="lefteye">
<div class="eyeball"></div>
<div class="eyebrow"></div>
</div>
<div class="righteye">
<div class="eyeball"></div>
<div class="eyebrow"></div>
</div>
</div>
</div>
</div>
<div class="hat"></div>
<div class="bubble">
<a href="index.html">Go back Home?</a>
</div>
</div>
<p>PAGE NOT FOUND</p>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
	  
  },
  mounted() {

  }
};
</script>
<style scoped>
.code {
    display: block;
    width: 100%;
    height: 120px;
    line-height: 120px
}
.code p {
    height: inherit;
    line-height: inherit;
    text-align: center;
    font-family: BalboaWide Bold;
    font-size: 50px;
    color: #697a8a;
    opacity: 1
}
.road {
    width: 100%;
    height: 600px
}
.road .shadow {
    position: relative;
    margin: auto;
    margin-top: 25%;
    width: 330px;
    height: 70px;
    border: 0;
    background: linear-gradient(#777373, #3c3c3c);
    box-shadow: 0 3px 10px 2px #464646, 0 -3px 10px 2px #3a3939 inset;
    border-radius: 100%
}
.road p {
    display: block;
    margin-top: 50px;
    height: inherit;
    line-height: inherit;
    text-align: center;
    font-family: BalboaWide Bold;
    font-size: 30px;
    color: #697a8a;
    opacity: 1
}
.road .shadow .bubble {
    display: block;
    position: absolute;
    top: -180px;
    left: 350px;
    width: 246px;
    height: 179px;
    background-image: url('../assets/img/bubble.png');
    background-repeat: no-repeat;
    text-align: center
}
.road .shadow .bubble a {
    line-height: 140px;
    font-family: microsoft yahei;
    font-size: 1.5em;
    color: #f8f8f5;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 1s;
    user-select: none
}
.road .shadow .bubble a:hover {
    color: #ff8c00
}
.road .shadow .shelt {
    position: absolute;
    margin: auto;
    margin-top: -80px;
    width: 330px;
    height: 150px;
    border: 0;
    border-radius: 100%;
    overflow: hidden;
    background: 0 0
}
.road .shadow .head {
    position: absolute;
    left: 50%;
    margin-left: -60px;
    width: 120px;
    height: 300px;
    border: 0;
    border-radius: 100% 100% 0 0;
    background-color: #292d38
}
.road .shadow .head .eyes {
    width: 100%;
    height: 50px;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around
}
.road .shadow .head .eyes .lefteye, .road .shadow .head .eyes .righteye {
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    background-color: #f1f2f4
}
.road .shadow .head .eyes .lefteye .eyebrow {
    position: absolute;
    width: 38px;
    left: 0;
    top: 0;
    height: 19px;
    border-radius: 19px 19px 0 0;
    background-color: #4c5465;
   animation: eye .5s ease-out;
    animation-iteration-count: infinite; 
}
.road .shadow .head .eyes .righteye .eyebrow {
    position: absolute;
    width: 38px;
    left: 0;
    top: 0;
    height: 19px;
    border-radius: 19px 19px 0 0;
    background-color: #4c5465;
    animation: eye .5s ease-out;
     animation-iteration-count: infinite; 
}
@keyframes eye {
  0% {
    clip: rect(0px 38px 4px 0px)

}
25% {
    clip: rect(0px 38px 10px 0px)

}
50% {
  clip: rect(0px 38px 18px 0px)

}
75% {
  clip: rect(0px 38px 10px 0px)

}
100% {
  clip: rect(0px 38px 4px 0px)

}
}
.road .shadow .head .eyes .lefteye .eyeball {
    position: absolute;
    width: 10px;
    left: 50%;
    top: 50%;
    margin-top: -5px;
    margin-left: -5px;
    height: 10px;
    border-radius: 100%;
    background-color: #292d38
}
.road .shadow .head .eyes .righteye .eyeball {
    position: absolute;
    width: 10px;
    left: 50%;
    top: 50%;
    margin-top: -5px;
    margin-left: -5px;
    height: 10px;
    border-radius: 100%;
    background-color: #292d38
}
.road .shadow .hat {
    position: absolute;
    top: -297px;
    left: -8px;
    width: 330px;
    height: 330px;
    background: url('../assets/img/sign.png') no-repeat;
    transform-origin: left bottom;
    /* transform: rotate(17deg); */
   animation: heartbit 1.8s ease-in;
    /* animation-iteration-count: infinite; */
}

@keyframes heartbit {
  0% {
   transform: rotate(15deg);

}
25% {
    transform: rotate(12deg);

}
50% {
    transform: rotate(9deg);

}
75% {
    transform: rotate(6deg);

}
100% {
   transform: rotate(3deg);

}
}
.head{
    animation: top 2s ease-out;
}
@keyframes top {
  0% {
   top:150px;

}
25% {
  top:120px;

}
50% {
   top:90px;

}
75% {
   top:60px;

}
100% {
  top:30px;

}
}


</style>

