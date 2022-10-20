import { request } from "./api";

export function requestShow(type){
    return request({
        url:'/product/findAllProByType',
        params:{
            type,
        }
    })
}