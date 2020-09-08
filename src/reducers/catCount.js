import shopTools from '../util/shoptools.js'

export default function(state={},action){
    let goods = action.data

    switch(action.type){
        case 'CART_ADD' :
            // console.log(goods)
            shopTools.addUpadta(goods)
            return shopTools.getshop()

        case 'CART_DEL' :
            // console.log(goods)
            shopTools.delete(goods)
            return shopTools.getshop()

        case 'CART_GOODS_NUM' :
            // console.log(goods)
            let zhongnum = Object .assign({},state,goods)
            return zhongnum

        default:
            return shopTools.getshop()
    }
}