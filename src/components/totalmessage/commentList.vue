<template>
  <div class="commonlist">
    <div class="commonitem">
      <div class="commonitem-title">
        <a href class="commonitem-name">Jessica</a>
        <span class="commonitem-time">3h ago</span>
      </div>
      <div class="commonitem-content-wrap">
        <div
          class="commonitem-content"
        >Cecteter adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ullamcorper sodales nisi nec adipiscing elit. Morbi id neque quam. Aliquam sollicitudin</div>
        <div class="commonitem-pic-wrap">
          <img src="@/assets/img/c5.jpg" class="commonitem-pic" />
        </div>
        <div class="m-t-sm">
          <a href class="commonitem-icon">
            <i class="icon-action-redo"></i>
          </a>
          <a href class="commonitem-icon">
            <i class="icon-star"></i>
          </a>
          <a href class="commonitem-icon">
            <i class="icon-refresh"></i> 13
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.commonitem-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.commonitem-name {
  font-size: 18px;
  font-weight: 400;
  color: rgb(88, 102, 110);
}
.commonitem-time {
  color: #98a6ad;
}
.commonitem-content-wrap,
.commonitem-content {
  margin-bottom: 15px;
}
.commonitem-pic-wrap {
  position: relative;
  max-width: 60%;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 60px rgba(0, 0, 0, 0.1) inset;
}
.commonitem-pic {
  width: 100%;
  height: 100%;
}
.commonitem-pic-wrap::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 80%;
  left: 20px;
  bottom: 6%;
  /*background-color: #F00;*/
  background-color: transparent;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  transform: skewX(-11deg) rotate(-4deg);
  z-index: -1;
}
.commonitem-pic-wrap::after {
  content: "";
  position: absolute;
  width: 90%;
  height: 80%;
  right: 20px;
  bottom: 6%;
  background-color: transparent;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  transform: skewX(11deg) rotate(4deg);
  z-index: -1;
}
.commonitem-icon {
  color: #98a6ad;
}
</style>
