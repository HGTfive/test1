import { request } from "./api";

export function postmymsg(username,sex,age,num){
    return request({
        url:'user/changeinfo',
        method:'post',
        params:{
            username,
            sex,
            age, 
            num,
        }
    })
}

export function getmymsg(){
    return request({
        url:'user/findById',
        method:'get'
    })
}

export function photoI(){
    return request({
        url:'user/changeAvatar',
        // method:'get'
    })
}