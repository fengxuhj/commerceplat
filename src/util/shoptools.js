
//封装业务需求功能函数
//利用H5的本地存储功能将商品的id和数量存到一个对象中{shopid: 数量}

let shopTools={}
//获取的是字符串，要转化
let shop = JSON.parse(window.localStorage.getItem("shopInfo") || '{}')

//更新商品
shopTools.addUpadta = function(goods){
    //判断是否有这个商品的id有就累加，没有就赋值
    // console.log(shop)
    if( shop[goods.id] ){
        
        shop[goods.id] += goods.num
    }else{
        shop[goods.id] = goods.num
    }
    this.saveshop()
}

//删除商品
shopTools.delete = function(id){
    delete shop[id]
    this.saveshop()
}

//不管做什么操作都要进行本地存储
shopTools.saveshop = function(){
    window.localStorage.setItem("shopInfo",JSON.stringify(shop))
    // console.log("set保存")
    // console.log(shop)
}

//默认获取
shopTools.getshop = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo") || '{}')
}

export default shopTools