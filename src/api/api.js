import {request} from '@/util/request.js'

export function getComponentType(data) {
    return request({
        url: '/hfu/test',
        method: 'post',
        params:{data},
    })
}
export function addComponentType(data){
    console.log("1112222==>",data)
    return request({
        url: '/hfuu/componentType/addComponentTypeInfo',
        method: 'post',
        headers: { "Content-Type": "application/json"},
        data: data ,
    })
}