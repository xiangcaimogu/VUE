//vue2.0的缺点：1.默认直接递归 2。数组改变length是无效的，3.对象不存在的属性不能被拦截
function isObject(obj) {
    return typeof obj == 'object' && obj != null;
}
function hasOwn(target, key) {
    return target.hasOwnProperty(key)
}
let toProxy = new WeakMap(); //弱引用映射表es6 放置的是原对象:代理过的对象
let toRaw = new WeakMap() // 被代理过的对象：原对象
function createReativeObject(target) {
    if (!isObject(target)) {
        return target
    }
    let proxy = toProxy.get(target)
    if (proxy) { //如果已经代理过了，就返回代理过的结果
        return proxy
    }
    if (toRaw.has(target)) {//防止代理过的对象再次被代理
        return target
    }
    let baseHandler = { // get set 等等方法 需要return返回值，Reflect与Object的区别是:Reflect有返回值
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)

            //收集依赖
            track(target, key) //如果目标上的key变化了，重新让数组的effect执行即可

            console.log(res)
            return isObject(res) ? reactive(res) : res //递归多层代理
        },
        set(target, key, value, receiver) {
            let hadKey = hasOwn(target, key)
            let oldValue = target[key]
            let res = Reflect.set(target, key, value, receiver)

            if (!hadKey) {
                trigger(target,'add',key)
                console.log('新增属性')
            } else if (oldValue !== value) {
                trigger(target,'set',key)
                console.log('修改属性')
            } else {

            }
            console.log(res)
            return res
        },
        deleteProperty() {
            let res = Reflect.deleteProperty(target, key)
            console.log('删除')
            return res
        }
    }

    let observed = new Proxy(target, baseHandler)
    toProxy.set(target, observed)
    toRaw.set(observed, target)
    return observed
}

//stack
let activeEffectStatck = []
let targetsMap= new WeakMap()
function track(target, key) {
    let effect = activeEffectStatck[activeEffectStatck.length - 1]
    if (effect) {
        let depsMap = targetsMap.get(target)
        if (!depsMap) {
            targetsMap.set(target, depsMap = new Map)
        }
        let deps = depsMap.get(key)
        if (!deps) {
            depsMap.set(key, deps = new Set())
        }
        if (!deps.has(effect)) {
            deps.add(effect)
        }
    }
}
function trigger (target,type,key){
    let depsMap = targetsMap.get(target)
    if(depsMap){
        let deps =depsMap.get(key)
        if(deps){
            deps.forEach((effect)=>{
                effect()
            })
        }
    }

}
//响应式
function effect(fn) {
    //需要把fn变成响应式的函数
    let effect = createReactiveEffect(fn)
    effect()
}

function createReactiveEffect(fn) {
    let effect = function () {

        return run(effect, fn) //运行 1.让fn执行，第二就是把effect存在stack
    }
    return effect
}
function run(effect, fn) {
    try {
        activeEffectStatck.push(effect)
        fn()
    } finally {
        activeEffectStatck.pop()

    }

}

//1.响应式的核心方法
function reactive(target) {
    //创建响应式对象
    return createReativeObject(target)
}



//依赖收集，发布订阅
let obj = reactive({ name: 'zf' })
effect(() => { //effect会执行两次，默认先执行一次，之后依赖的数据变化，再次执行
    console.log(obj.name)
})
obj.name = 'hj'

// let proxy = reactive([1, 2, 3, 4]) //如果多次代理，通过get 方法来判断 
//需要记录一下，如果这个对象代理过了，就不要new了
//hash表 映射表 {key=>value}key 只能是字符串或数子
// proxy.push(5)
// console.log(proxy)

// let proxy = reactive({ name: { n: 'zf' } }) //多次代理
// let proxy = reactive({ name: { n: 'zf' } })
// reactive(proxy)//代理过的再次代理
// reactive(proxy)