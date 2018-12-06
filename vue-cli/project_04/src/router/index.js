import Vue from 'vue'
import Router from 'vue-router'
import DiceGame from '@/components/Dice/DiceGame'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/baccarat',
      name: 'baccarat',
      component: HelloWorld
    },
    {
      path: '/dice',
      name: 'dice',
      component: DiceGame
    }
  ]
})
