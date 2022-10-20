import { request } from "./api";

export function postregister(data){
    return request({
        url:'register',
        method:'post',
       data:data
    })
}