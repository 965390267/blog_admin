<template>
  <div class="ylcon">
    <p class="tit">所有留言</p>
    <div id="messDivId">
        <div class="story-item">
            <div class="ds-avatar">
			<a ><img alt="" src="http://tp3.sinaimg.cn/1750584642/50/5612846168/1"></a>
		</div>
        <div class="story">
        <div class="opbtn"></div>
        <p class="story_t">怜星</p>
        <p class="story_time">2015/07/12 20:48</p>
        <p class="story_m">我想问最近最火的tfboys呢他们的八卦呢我想问最近最火的tfboys呢,他们的八卦呢我想问最近最火的tfboys呢？！他们的八卦呢？！</p>
        <p
          class="story_hf"
        >@剑花烟雨:的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契</p>
      </div>
        </div>
      <div class="story-item">
          <div class="ds-avatar">
			<a ><img alt="" src="http://tp3.sinaimg.cn/1750584642/50/5612846168/1"></a>
		</div>
        <div class="story">
        <div class="opbtn"></div>
        <p class="story_t">怜星</p>
        <p class="story_time">2015/07/12 20:48</p>
        <p class="story_m">我想问最近最火的tfboys呢他们的八卦呢我想问最近最火的tfboys呢,他们的八卦呢我想问最近最火的tfboys呢？！他们的八卦呢？！</p>
        <p
          class="story_hf"
        >@剑花烟雨:的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契</p>
      </div>
        </div>
     <div class="story-item">
         <div class="ds-avatar">
			<a ><img alt="" src="http://tp3.sinaimg.cn/1750584642/50/5612846168/1"></a>
		</div>
        <div class="story">
        <div class="opbtn"></div>
        <p class="story_t">怜星</p>
        <p class="story_time">2015/07/12 20:48</p>
        <p class="story_m">我想问最近最火的tfboys呢他们的八卦呢我想问最近最火的tfboys呢,他们的八卦呢我想问最近最火的tfboys呢？！他们的八卦呢？！</p>
        <p
          class="story_hf"
        >@剑花烟雨:的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契的是相对无言眼波如流的默契</p>
      </div>
        </div>
    </div>
    <comments></comments>
  </div>
</template>
<script>
import comments from '@/components/receivebox/child'
export default {
    components:{
comments
    },
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style scoped>

.ylcon {
     padding: 0 20px;
}
.tit {
      font-family: "Ruda", sans-serif;
    font-size: 24px;
    color: rgb(121, 121, 121);
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.story-item{
    position: relative;
}
.ds-avatar {
    
    position: absolute;
    top: 48px;
    left: -20px;
    padding: 5px;
    width: 36px;
    height: 36px;
    z-index: 2;
    box-sizing: content-box;
    border-radius: 50%;
    box-shadow: -1px 0 1px rgba(0,0,0,.15) inset;
    background: #E5E6D0 url(http://www.shejidaren.com/wp-content/themes/Daren/images/bg.jpg) repeat 0 0;
}
.ds-avatar a {
    display: block;
    padding: 1px;
    width: 32px;
    height: 32px;
     box-sizing: content-box;
    border: 1px solid #B9BAA6;
    border-radius: 50%;
    background-color: #fff;
    -moz-transition: color 0.15s linear;
    -webkit-transition: color 0.15s linear;
    transition: color 0.15s linear;
}
.ds-avatar img {
    display: block;
    width: 32px;
    height: 32px;
    
    border-radius: 50%;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.22);
}
.story {
  border-bottom: 1px dashed #cecece;
    
    position: relative;
    left: 0;
     z-index: 1;
    background: #F0F0E3;
    padding: 15px 15px 15px 47px;
    color: #696A52;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,.15), 0 1px 0 rgba(255,255,255,.75) inset;
}
.story_t {
  font-size: 1.2em;
  color: #DE4C1C;
  padding-top: 5px;
  padding-bottom: 2px;
}
.story_m {
  color: rgba(110, 110, 110, 1);
  line-height: 21px;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 1.2em;
  padding: 2px 0;
}
.story_time {
  color: rgba(154, 154, 154, 1);
  padding: 2px 0;
}
.story_hf {
  background: rgb(245, 245, 245);
  font-size: 1.2em;
  border: 1px solid rgba(204, 204, 204, 0.2);
  border-radius: 2px;
  color: rgba(110, 110, 110, 1);
  padding: 4px;
  margin-bottom: 5px;
}
.opbtn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
