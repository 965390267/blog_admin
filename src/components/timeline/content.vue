<template>
  <div class="panel">
    <div class="panel-body">
      <span class="arrow"></span>
      <span class="timeline-icon red"></span>
      <span class="timeline-date">08:25 am</span>
      <h1 class="red">12 July | Sunday</h1>
      <p>Lorem ipsum dolor sit amet consiquest dio</p>
    </div>
  </div>
</template>
<style scope>
.timeline-desk .panel {
      position: relative;
  display: block;
  margin-left: 25px;
  margin-bottom: 5px;

  text-align: left;
  background: #f4f4f4;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-body:before, .panel-body:after {
    display: table;
    content: " ";
}
 .arrow {
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    display: block;
    height: 0;
    left: -7px;
    position: absolute;
    top: 13px;
    width: 0;
}
 .arrow {
    border-right: 8px solid #F4F4F4 !important;
}


 .timeline-icon {
      left: -30px;
    position: absolute;
    top: 15px;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    display: block;
    height: 12px;
    width: 12px;
     background: #C7CBD6;
    box-shadow: 0 0 0 3px #C7CBD6;
}
 .timeline-icon.red {
    background: #EF6F66;
    box-shadow: 0 0 0 3px #EF6F66;
}

.timeline-date {
    left: -200px;
    position: absolute;
    text-align: right;
    top: 12px;
    width: 150px;
}
 h1.red,  span a.red {
    color: #EF6F66;
}

 h1 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 5px;
}
 p {
    font-size: 12px;
    margin-bottom: 0;
}
.timeline-item.alt .timeline-desk .arrow-alt {
    border-left: 8px solid #F4F4F4 !important;
}
 .timeline-icon.green {
    background: #39B6AE;
    box-shadow: 0 0 0 3px #39B6AE;
}
.timeline-item.alt .timeline-date {
    left: auto;
    right: -200px;
    text-align: left;
}
</style>
