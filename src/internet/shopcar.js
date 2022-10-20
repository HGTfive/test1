import { request } from "./api";

export function requestShopcar(){
    return request({
        url:'/cart/findVOByUid '
    })
}


export function requestShopcarP(pid,number){
    return request({
        url:'/cart/addToCart',
        method:'post',
        params:{
            pid,
            number
        }
    })
}

export function requestShopcarD(pid){
    return request({
        url:'/cart/deleteByUidAndPid',
        method:'post',
        params:{
            pid
            
        }
    })
}

export function update(pid,number){
    return request({
        url:'/cart/updateNumber',
        method:'post'
    })
}