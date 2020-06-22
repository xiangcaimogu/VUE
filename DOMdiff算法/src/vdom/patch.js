export function render(vnode, container) {
    let ele = createDomElement(vnode) //通过这个方法可以将虚拟节点转化为真实节点
    container.appendChild(ele)
    sonsole.log(vnode, container)
}
function createDomElement(vnode) {
    let { type, key, props, children, text } = vnode
    if (type) {
        vnode.domElement = document.createElement(type)
        
    } else {
        vnode.domElement = document.createElement(type)

    }
    return  vnode.domElement
}