import {get} from "./request";

export function getMultiData(uri) {
  return get('/home/multidata')
}

export function getHomeGoods(type,page) {
  return get('/home/data',{
    type,
    page
  })
}
