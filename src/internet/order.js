import { request } from "./api";
//get 已支付订单
export function getPayed(){
    return request({
        url:'/orderp/findByUid',
        method:'get',
        
    })
}
// get 没支付订单
export function getunPayed(){
    return request({
        url:'/orderup/findByUid',
        method:'get',
        
    })
}
// post已经支付订单
export function postPayed(pid){
    return request({
        url:'/orderp/addToOrderp',
        method:'post',
        params:{
            pid
            
        }
    })
}

export function delPayed(oid){
    return request({
        url:'/orderp/deleteByOid',
        method:'post',
        params:{
            oid
        }
    })
}
export function delunPayed(oid){
    return request({
        url:'/orderup/deleteByOid',
        method:'post',
        params:{
            oid
        }
    })
}
export function postunPayed(pid,number){
    return request({
        url:'/orderup/addToOrderup1',
        method:'post',
        params:{
            pid,
            number
        }
    })
}

// post已经支付订单
export function postPayed1(pid,number){
    return request({
        url:'/orderp/addToOrderp1',
        method:'post',
        params:{
            pid,
            number
        }
    })
}
