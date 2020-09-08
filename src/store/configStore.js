import {createStore} from 'redux'
import Reducers from '../reducers/index.js'

export default function (init){ 
    const store = createStore(
        Reducers,
        init,
        window.devToolsExtension?window.devToolsExtension():undefined
    )
    return store
}

// Reducers各种功能函数的一个集合（如catCount.js）模块化的一个管理
// init是state的初始值
//window.devToolsExtension()是一个调试工具
