<template>
  <div class="musiclist">
    <h2 class="font-thin"></h2>
    <div class="musiclist-wrap">
      <ul>
        <li class="music-list-item">
          
          <div class="img-wrap">
                <div class="item-overlay">
               
           </div>
            <img class="music-thumb" src='http://www.templatesy.com/demo/68/images/m5.jpg'  />
          </div>
          <div class="pader-v">
            <h4 class="singname">Tempered Song</h4>
            <h4 class="name">Miaow</h4>
          </div>
        </li>
        <li class="music-list-item">
          
          <div class="img-wrap">
                <div class="item-overlay">
               
           </div>
            <img class="music-thumb" src='http://www.templatesy.com/demo/68/images/m5.jpg'  />
          </div>
          <div class="pader-v">
            <h4 class="singname">Tempered Song</h4>
            <h4 class="name">Miaow</h4>
          </div>
        </li>
       <li class="music-list-item">
           
          <div class="img-wrap">
              <div class="item-overlay">

           </div>
            <img class="music-thumb" src='http://www.templatesy.com/demo/68/images/p4.jpg'  />
          </div>
          <div class="pader-v">
            <h4 class="singname">Tempered Song</h4>
            <h4 class="name">Miaow</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style  scoped>
.music-list-item {
    float: left;
  width: 220px;

  margin-left: 10px;
  margin-right: 10px;
}
.img-wrap{
     position: relative;
}
.music-thumb{
    width: 220px;
      height: 300px;
    border-radius: 4px;
}
.item-overlay{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.75);
    border-radius: 4px;
}
.music-list-item:hover .item-overlay{
display: block;
}
.pader-v {
  padding-top: 15px;
  padding-bottom: 15px;
}
.singname,
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #545a5f;
}
.name {
  color: #939aa0;
  font-size: 12px;
}
</style>