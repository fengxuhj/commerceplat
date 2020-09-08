export function addNum(data){
    return {
        type: "CART_ADD",
        data
    }
}
export function reduceNum(data){
    return {
        type: "CART_DEL",
        data
    }
}
export function getNum(data){
    return {
        type: "CART_GOODS_NUM",
        data
    }
}