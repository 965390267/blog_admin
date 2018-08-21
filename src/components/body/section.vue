<template>
    <section id="main-content" :style="{marginLeft:move+'px'}" >
          <section class="wrapper">

             <router-view></router-view>
          </section>
      </section>
</template>
<script>
export default {
  data(){
return{
move:210
}
  },
 
  methods: {

    change(){
if(this.move==210){
  this.move=0
}else{
  this.move=210;
}
    }
  },
  mounted(){

    
  }
};
</script>