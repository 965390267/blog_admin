<template>
         <div class="page-container">
            <h1  @click="logout">Login</h1>
            <form action="" method="post">
                <input type="text" name="username" class="username" @keydown.enter="enter" v-model="username" placeholder="Username">
                <input type="password" name="password" class="password"  @keydown.enter="enter" v-model="password" placeholder="Password">
                <button class="signbtn" type="button" @click="enter">Sign me in</button>
     <!-- <mu-button full-width color="primary">Sign me in</mu-button> -->
                <div class="error"><span>+</span></div>
            </form>
            <div class="connect">
                <p>Or connect with:</p>
                <p>
                    <a class="facebook" ></a>
                    <a class="twitter" ></a>
                </p>
            </div>
             <div class="desweb">              
                <p>
                    <a class="facebook">Copyright&nbsp;&nbsp;㉢&nbsp;&nbsp;ZZH博客后台管理系统. All Rights Reserved.</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="twitter" >滇ICP备案:18003157</a>
                </p>
            </div>
            <div class="bgimg"></div>
        </div>   
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    logout() {
      this.$http.get("api/systemmessage").then(res => {
        console.log(res);
      });
    },
    enter() { this.$router.push({ path: "/index/home" });
      if (this.username == "" && this.password == "") {
        this.$message({
          message: "用户名和密码不能为空",
          type: "warning"
        });
      } else {
        if (this.username === "") {
          this.$message({
            message: "请输入您的用户名",
            type: "warning"
          });
        }
        if (this.password === "") {
          this.$message({
            message: "请输入您的密码",
            type: "warning"
          });
        }
      }
      if (this.username !== "" && this.password !== "") {
        this.$http
          .post("api/Authentication/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.$router.push({ path: "/main" });
            } else {
              this.$message({
                message: "用户名或密码错误",
                type: "success"
              });
            }
          })
        //    this.$router.push({path:'/main'})
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bgimg {
  position: fixed;

  top: 0px;
  left: 0px;
  z-index: -99;
  background-image: url("../assets/img/backgrounds/4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  width: 100%;
  height: 100%;
  background-color: #dcdddf;
}
.desweb {
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.desweb a {
  color: #333;
}



.page-container {
    margin: 200px auto 0 auto;
}

h1 {
    font-size: 30px;
    font-weight: 700;
    color:white;
    text-align: center;
    text-shadow: 0 1px 4px rgba(0,0,0,.2);
}

form {
    position: relative;
    width: 305px;
    margin: 15px auto 0 auto;
    text-align: center;
}

input {
    width: 270px;
    height: 42px;
    margin-top: 25px;
    padding: 0 15px;
    background-color: #2d2d2d; /* browsers that don't support rgba */
    background-color: rgba(45,45,45,.35);
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #3d3d3d; /* browsers that don't support rgba */
    border: 1px solid rgba(255,255,255,.15);
    -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}

input:-moz-placeholder { color: rgb(202, 226, 235); }
input:-ms-input-placeholder { color: rgb(202, 226, 235); }
input::-webkit-input-placeholder { color: rgb(202, 226, 235); }

input:focus {
    -webkit-animation: glow 800ms ease-out infinite alternate;
    -moz-animation: glow 800ms ease-out infinite alternate;
    -o-animation: glow 800ms ease-out infinite alternate;
    -ms-animation: glow 800ms ease-out infinite alternate;
    animation: glow 800ms ease-out infinite alternate;
  
    /* box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000; */
    color: #efe;
    outline: none;
    -moz-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
}
@keyframes glow{
    0% {
        border-color: #393;
        box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
    }
   
    100% {
        border-color: #6f6;
        box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
    }
}
.signbtn {
    cursor: pointer;
    width: 300px;
    height: 44px;
    margin-top: 25px;
    padding: 0;
    background: #ef4300;
    border-radius: 6px;
    border: 1px solid #ff730e;
    box-shadow:
        0 15px 30px 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    transition: all .2s;
}

.signbtn:hover {
    -moz-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.15) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.15) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 15px 30px 0 rgba(255,255,255,.15) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
          cursor: url('../assets/img/cursor/hover.png'), auto;
}

button:active {
    -moz-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.15) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 15px 30px 0 rgba(255,255,255,.15) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:        
        0 5px 8px 0 rgba(0,0,0,.1) inset,
        0 1px 4px 0 rgba(0,0,0,.1);

    border: 0px solid #ef4300;
}

.error {
    display: none;
    position: absolute;
    top: 27px;
    right: -55px;
    width: 40px;
    height: 40px;
    background: #2d2d2d; /* browsers that don't support rgba */
    background: rgba(45,45,45,.25);
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
}

.error span {
    display: inline-block;
    margin-left: 2px;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);

}

.connect {
    width: 305px;
    margin: 35px auto 0 auto;
    font-size: 18px;
    font-weight: 700;
    text-shadow: 0 1px 3px rgba(0,0,0,.2);
}
.connect  p{
  text-align: center;
    color:white;
}
.connect a {
    display: inline-block;
    width: 32px;
    height: 35px;
    margin-top: 15px;
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}

.connect a.facebook { background: url('../assets/img/facebook.png') center center no-repeat; }
.connect a.twitter { background: url('../assets/img/twitter.png') center center no-repeat; }

.connect a:hover { background-position: center bottom; }



</style>
