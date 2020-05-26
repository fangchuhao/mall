import {
  ADD_PRODUCT_COUNT,
  ADD_CART
} from  './mutation-types'
export default {
  [ADD_PRODUCT_COUNT](state, payload) {
    payload.count++
  },
  [ADD_CART](state,payload) {
    state.cartList.push(payload)
  }
}
