import {test, expect} from '@playwright/test';

test('get request', aync({request}))==>{
    const baseurl=""
    const url="users"
    const response=await request.get(baseurl/url)
    await expect (response.status).toBe(200)

    expect (response.data.id).tobe('1')


}   

test('delete request', aync({request}))==>{
    headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer_token'
    }
    const baseurl=""
    const url="user/2"
    const response=await request.get(baseurl/url)
    await expect (response.status).toBe(204)

    expect (response.data.id).tobe('1')


} 

