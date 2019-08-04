import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import main from '@/view/main'
import allmessage from '@/view/subpage/allmessage'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path:'/main',
      name:'main',
      component: main,
      children:[{
        path: '/main',
        name: 'allmessage',
        component: allmessage
      },{
        path: '/main/sendarticle',
        name: 'sendarticle',
        component: ()=>import('@/view/subpage/sendarticle')
      },{
        path: '/main/articlelist',
        name: 'articlelist',
        component: ()=>import('@/view/subpage/articlelist')
      },{
        path: '/main/photo',
        name: 'photo',
        component: ()=>import('@/view/subpage/photo')
      },{
        path: '/main/liuyan',
        name: 'liuyan',
        component: ()=>import('@/view/subpage/liuyan')
      },{
        path: '/main/music',
        name: 'music',
        component: ()=>import('@/view/subpage/music')
      },{
        path: '/main/weiyu',
        name: 'weiyu',
        component: ()=>import('@/view/subpage/weiyu')
      },{
        path: '/main/setting',
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