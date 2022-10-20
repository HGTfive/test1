import {request} from './api'

export function requestLogin(data){
    return request({
        url:'/login',
        method:'post',
        data:data
        
    })
}