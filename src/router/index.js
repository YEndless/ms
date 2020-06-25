import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../view/Index.vue'], resolve),
      meta: {
        title: '主页',
        // requireAuth: true
      },
      children: [
        {
          path:'/',
          component:resolve => require(['../view/Main.vue'],resolve),
          meta:{
            title:'主页'
          },
        },
        {
          path:'/purchase',
          component:resolve => require(['../view/Purchase.vue'],resolve),
          meta:{
            title:'购买管理'
          },
        },
        {
          path:'/subtenancy',
          component:resolve => require(['../view/Subtenancy.vue'],resolve),
          meta:{
            title:'转借管理'
          },
        },
        {
          path:'/maintain',
          component:resolve => require(['../view/Maintain.vue'],resolve),
          meta:{
            title:'维修管理'
          },
        },
        {
          path:'/stock',
          component:resolve => require(['../view/Stock.vue'],resolve),
          meta:{
            title:'库存管理'
          },
        },
        {
          path:'/scrap',
          component:resolve => require(['../view/Scrap.vue'],resolve),
          meta:{
            title:'报废管理'
          },
        },
        {
          path:'/addpurchase',
          component:resolve => require(['../view/add.vue'],resolve),
          meta:{
            title:'新增设备'
          },
        },
        {
          path:'/addScrap',
          component:resolve => require(['../view/newadd/addScrap.vue'],resolve),
          meta:{
            title:'新增'
          },
        },
        {
          path:'/addmaintain',
          component:resolve => require(['../view/addMaintain.vue'],resolve),
          meta:{
            title:'新增'
          },
        },
        {
          path:'/addstock',
          component:resolve => require(['../view/newadd/addStock.vue'],resolve),
          meta:{
            title:'新增'
          },
        },
        {
          path:'/addsubtenancy',
          component:resolve => require(['../view/newadd/addSubtenancy.vue'],resolve),
          meta:{
            title:'新增'
          },
        },
        {
          path:'/adduser',
          component:resolve => require(['../view/newadd/adduser.vue'],resolve),
          meta:{
            title:'新增'
          },
        },
        {
          path:'/user',
          component:resolve => require(['../view/User.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/others',
          component:resolve => require(['../view/others.vue'],resolve),
          meta:{
            title:''
          },
        },
      ],
    },


    {
      path: '/login',
      component: resolve => require(['../view/Login.vue'], resolve),
      meta: {
        title: '登录',
        type:'login',
      }
    },
    {
      path: '/test',
      component: resolve => require(['../view/test.vue'], resolve),
      meta: {
        title: '',
        type:'',
      }
    },
    {
      path: '/main',
      component: resolve => require(['../view/Main.vue'], resolve),
      meta: {
        title: '',
        type:'',
      }
    },

  ]
})
