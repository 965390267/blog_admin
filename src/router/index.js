import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '../components/main'
import allmessage from '../components/bodyitem/allmessage'
import sendarticle from '../components/bodyitem/sendarticle'
import articlelist from '../components/bodyitem/articlelist'
import photo from '../components/bodyitem/photo'
import liuyan from '../components/bodyitem/liuyan'
import music from '../components/bodyitem/music'
import suibi from '../components/bodyitem/suibi'

import setting from '../components/bodyitem/setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path:'/main',
      name:'main',
      component:main,
      children:[{
        path: '/main',
        name: 'allmessage',
        component: allmessage
      },{
        path: '/main/sendarticle',
        name: 'sendarticle',
        component: sendarticle
      },{
        path: '/main/articlelist',
        name: 'articlelist',
        component: articlelist
      },{
        path: '/main/photo',
        name: 'photo',
        component: photo
      },{
        path: '/main/liuyan',
        name: 'liuyan',
        component: liuyan
      },{
        path: '/main/music',
        name: 'music',
        component: music
      },{
        path: '/main/suibi',
        name: 'suibi',
        component: suibi
      },{
        path: '/main/setting',
        name: 'setting',
        component: setting
      }
      ]
    }
  ]
})
