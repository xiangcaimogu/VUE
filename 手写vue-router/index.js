import Vue from './node_modules/vue/dist/vue.js';

class History{
    constructor(){}
    listen(callback){
        window.addEventListener('hashchange',()=>{
            console.log('hash-change',window.location.hash)
            callback && callback(window.location.hash)
        })
    }
}
class VueRouter{
    constructor({routes}){
        console.log('111')
        this.routes=routes
        this.history =new History()
        this.history.listen((hash)=>{
            console.log('this-vm',this.vm)
        })
    }
    init(vm){
        this.vm=vm
    }
}
VueRouter.install=function(Vue){
    console.log(Vue)
    Vue.mixin({
        beforeCreate () {
            console.log('asd')
            this.$options.router.init(this)
        }
    })
    Vue.component('router-view',{
        functional:true,
        render(createElement,{props,children,parent,data}){
            var comp={
                template:'<div>我是router-view</div>'
            }
            return  createElement(
                comp
            )
        }
    })
}



const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})
Vue.use(router)
new Vue({
    el:"#app",
    data(){
        return {
            str:'asd'
        }
    }
})

