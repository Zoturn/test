import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration/'
import Visualisation from '@/components/Visualisation/'
import Collection from '@/components/Collection/'
import Login from '@/components/Login/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/viz',
      name: 'Visualisation',
      component: Visualisation
    },
    {
      path: '/col',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/log',
      name: 'Login',
      component: Login
    }
  ]
})
