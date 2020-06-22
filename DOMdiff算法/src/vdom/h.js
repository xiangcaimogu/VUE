/**
 * 
 * @param {*} type 类型
 * @param {*} props 节点属性
 * @param  {...any} children 子节点
 */
import {vnode} from './vnode.js'
export default function createElement(type, props = {}, ...children) {
    let key;
    if (props.key) {
        key = props.key
        delete props.key
    }
    let children = children.map((item,index)=>{
        if(typeof item === 'string'){
            return vnode(undefined,undefined,undefined,undefined,item)
        }else {
            return item
        }
    })
    return vnode(type, key, props, children)
   
}
