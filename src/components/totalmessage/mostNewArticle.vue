<template>
    <div class="mostnew">
     <div class="most-new-title">最热文章</div>
      <div class="most-new-item">
          <div class="left-icon"></div>
          <div class="right-context">
              <div class="most-new-article-title">陌上花开，可缓缓归矣</div>
              <div class="article-time">2019-9-1</div>
          </div>
      </div>
    </div>
</template>
<style scope>
    .mostnew {
  position: relative;
  border-radius: 5px;
  padding: 16px 0;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}
.most-new-title{
    padding: 4px 0 0 12px;
    margin-bottom: 10px;
    font-family: "Ruda", sans-serif;
    font-size: 18px;
    color: rgb(121, 121, 121);
}
.most-new-item{
    display: flex;
   align-items: center;
   padding: 4px 8px;
}
.left-icon{
    width: 50px;
    height: 50px;
    border-radius: 2px;
    background-color: rgb(218, 216, 216);
}
.left-icon:hover{
     box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
}
.right-context{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 8px;
    flex: 1;
}
.most-new-article-title{
  padding: 4px ;
  color: #876800;
}
.article-time{
    padding: 4px ;
  color: #ff9c6e;
}
</style>