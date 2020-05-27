import {
  ADD_PRODUCT_COUNT,
  ADD_CART
} from  './mutation-types'
export default {
  addCart(context,payload) {
    return new Promise(((resolve, reject) => {
      let tempItem=null
      // for(let item of state.cartList) {
      //   if(item.iid===payload.iid) {
      //     tempItem=item
      //   }
      // }
      tempItem=context.state.cartList.find(item=> item.iid===payload.iid)
      if(tempItem) {
        context.commit(ADD_PRODUCT_COUNT,tempItem)
        resolve('购物车内该商品数量+1')
      }else {
        payload.count=1
        context.commit(ADD_CART,payload)
        resolve('已添加商品至购物车')
      }
    }))
  }
}
