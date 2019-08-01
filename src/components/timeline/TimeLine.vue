<template>
  <div class="timeline-wrap">
    <div class="text-center mbot30">
      <h3 class="timeline-title">Timeline</h3>
      <p class="t-info">This is a project timeline</p>
    </div>
    <div class="timeline">
      <template v-for="index in 15" >
        <article class="timeline-item" v-if="index%2==0" :key='index'>
          <div class="timeline-desk">
            <Content></Content>
          </div>
        </article>
        <article v-else class="timeline-item alt" :key='index'>
          <div class="timeline-desk">
            <Content></Content>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>
<script>
import Content from "./content";
export default {
  components: {
    Content
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h3.timeline-title {
  margin: 0;
  color: #c8ccd7;
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 5px;
  text-transform: uppercase;
}
.t-info {
  color: #c8ccd7;
  margin-bottom: 40px;
}
.timeline-wrap{
  padding: 8px 16px 8px 16px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background:rgba(255, 255, 255, 0.6);

}
.timeline {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  position: relative;
  table-layout: fixed;
  width: 100%;
}
.timeline:before {
  background-color: #c7cbd6;
  bottom: 0px;
  content: "";
  left: 50%;
  position: absolute;
  top: 0;
  width: 2px;
  z-index: 0;
}
.timeline-item {
  display: table-row;
}
.timeline-item.alt:before {
  display: none;
}
.timeline-item:before,
.timeline-item.alt:after {
  content: "";
  display: block;
  width: 50%;
}
.timeline-desk {
  display: table-cell;
  vertical-align: top;
  width: 50%;
}
</style>
