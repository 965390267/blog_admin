<template>
      <div class="float_card">
      <div class="card">
        <div class="row">
          <div class="col-4">
            <div class="circle-icon">
              <img src="@/assets/img/circle.svg" class="card-img-absolute" />
              <i class></i>
            </div>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h1 class="mb-3">17,533</h1>
              <h5 class="font-weight-normal">Visits</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="row">
          <div class="col-4">
            <div class="circle-icon">
              <img src="@/assets/img/circle.svg" class="card-img-absolute" />
              <i class></i>
            </div>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h1 class="mb-3">17,533</h1>
              <h5 class="font-weight-normal">Likes</h5>
            </div>
          </div>
        </div>
      </div>

       <div class="card">
        <div class="row">
          <div class="col-4">
            <div class="circle-icon">
              <img src="@/assets/img/circle.svg" class="card-img-absolute" />
              <i class></i>
            </div>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h1 class="mb-3">17,533</h1>
              <h5 class="font-weight-normal">Comments</h5>
            </div>
          </div>
        </div>
      </div>

       <div class="card">
        <div class="row">
          <div class="col-4">
            <div class="circle-icon">
              <img src="@/assets/img/circle.svg" class="card-img-absolute" />
              <i class></i>
            </div>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h1 class="mb-3">17,533</h1>
              <h5 class="font-weight-normal">Posts</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<style scoped>
.float_card {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  margin-top: 110px;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 46%;
  min-width: 300px;
  height: 100px;
  margin: 0 4% 30px 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  color: #707070;
}
.card:hover {
  box-shadow: 0 16px 26px 0 rgba(198, 198, 200, 0.8),
    0 3px 6px 0 rgba(198, 198, 198, 0.2);
}
.card .row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}
.circle-icon {
  height: 70px;
  width: 70px;
  position: absolute;
  margin-top: 13px;
  margin-left: 13px;
  float: right;
  border-radius: 5px;

}
 .card:nth-child(1) .circle-icon{
  background: linear-gradient(to bottom right, #9853af, #623aa2);
  box-shadow: 0 7px 30px rgba(152, 83, 175, 0.5) ;
}
 .card:nth-child(2) .circle-icon{
background: linear-gradient(to bottom right, #fbc434 0%, #f66b4e 100%) ;
box-shadow: 0 7px 30px rgba(248, 147, 67, 0.50);
}
 .card:nth-child(3) .circle-icon{
      background: linear-gradient(to bottom right,#00f2fe 0%, #1e63c3 100%) ;
      box-shadow: 0 7px 30px rgba(40, 146, 235, 0.50);
}
 .card:nth-child(4) .circle-icon{
  background: linear-gradient(to bottom right, #62fb62, #21a544) ;
  box-shadow: 0 7px 30px rgba(26, 122, 16, 0.50);
}
.card-body .mb-3 {
  margin: 0;
  margin-top: 10px;
}
.font-weight-normal {
  font-weight: 400;
  font-size: 16px;
}
</style>

