import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import App from '../App.vue'

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: App,
      redirect:'/index/smart',
      children:[
        {
          path:'/index/smart',
          component:()=>import('../views/Index.vue'),
          children:[
            {
              path:'/index/:id',
              component:()=>import('../views/Content.vue')
            }
          ]
        },{
          path:'/detail',
          component:()=>import('../views/Detail.vue')
        }
      ]
    }
  ]
})

export default router
