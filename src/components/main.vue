<template>
  <section id='container'>
    <head-nav @change="toggle"></head-nav>
    <left-aside ref='changemove'></left-aside>
    <body-section ref='addwidth'></body-section>
    <footer-nav></footer-nav>
    </section>  
</template>

<script>
import HeadNav from "../components/body/header.vue";
import LeftAside from "../components/body/aside.vue";
import BodySection from "../components/body/section.vue";
import FooterNav from "../components/body/footer.vue";
export default {
  components: {
    HeadNav,LeftAside,BodySection,FooterNav
  },
  name: "login",
  data() {
    return {
     
    };
  },
  methods:{
toggle(){

this.$refs.changemove.toggle()
this.$refs.addwidth.change()
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
