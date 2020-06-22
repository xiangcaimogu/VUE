import {h,render} from './vdom'
let vnode =h('div',{id:'wrapper',a:1,key:'xx'},h('span',{style:{color:'red'}},'hello'),'zf')
// console.log(vnode)

render(vnode,app)