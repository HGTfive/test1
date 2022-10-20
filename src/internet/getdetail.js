import { request } from "./api";

export function getdetail(id){
    return request({
        url:'/product/findById',
        params:{
            id
        }
    })
}