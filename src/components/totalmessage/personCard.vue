<template>
  <div class="personcard">
    <img src="@/assets/img/profile-bg.jpg" alt class="card-img" />
    <div class="personcard-body">
      <div class="pro-img">
        <img src="@/assets/img/ui-sam.jpg" alt srcset class="head-img-circle" />
      </div>
      <h3 class="name">Angela Dominic</h3>
      <p class="work">Web Designer & Developer</p>

    </div>
  </div>
</template>
<script>

export default {
  components:{

  }
}
</script>
<style scoped>
.personcard {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}
.card-img {
  width: 100%;
  height: 150px;
}
.personcard-body {
  padding: 20px;
}
.pro-img {
  margin-top: -80px;
  margin-bottom: 20px;
  text-align: center;
}
.pro-img .head-img-circle {
  width: 128px;
  height: 128px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
}
.personcard-body .name {
  font-family: "Poppins", sans-serif;
  color: #455a64;
  font-size: 21px;
  line-height: 30px;
  font-weight: 400;
  text-align: center;
}
.personcard-body .work {
  font-family: "Poppins", sans-serif;
  color: #67757c;
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  text-align: center;
}
</style>

