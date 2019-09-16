import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/view/login'),
    },
    {
      path:'/index',
      name:'index',
      component:  ()=>import('@/view/main'),
      children:[{
        path: '/index/home',
        name: 'home',
        component: ()=>import('@/view/subpage/allmessage')
      },{
        path: '/index/sendarticle',
        name: 'sendarticle',
        component: ()=>import('@/view/subpage/sendarticle')
      },{
        path: '/index/articlelist',
        name: 'articlelist',
        component: ()=>import('@/view/subpage/articlelist')
      },{
        path: '/index/photo',
        name: 'photo',
        component: ()=>import('@/view/subpage/photo')
      },{
        path: '/index/liuyan',
        name: 'liuyan',
        component: ()=>import('@/view/subpage/liuyan')
      },{
        path: '/index/music',
        name: 'music',
        component: ()=>import('@/view/subpage/music')
      },{
        path: '/index/weiyu',
        name: 'weiyu',
        component: ()=>import('@/view/subpage/weiyu')
      },{
        path: '/index/setting',
        name: 'setting',
        component: ()=>import('@/view/subpage/setting')
      }
      ]
    },{
      path: '*',
      name: '404',
      component: ()=>import('@/view/error')
    }
  ]
})

// router.beforeEach((to,from,next)=>{
// const isLogin=localStorage.getItem('token')?true:false;
// if(to.path=='/'||to.path=='/register'){
//   next()
// }else{
//   isLogin?next():next('/')
// }
// })
export default router;