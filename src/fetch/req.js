import axios from 'axios';
import qs from 'qs';

let urlPrefix = {
    backend: '',
    plat: 'http://localhost:5000', // request address 
    upload: '',
    docker: '',
    open: ''
}

export function fetch(url, data, method = 'GET', headers = {}) {
    return new Promise((resolve, reject) => {
        let options = {
            'method': method,
            'url': url,
            'headers': headers && typeof headers === 'object' ? headers : {}
        }
        // options.headers['X-Requested-Page'] = 'json'
        options[method === 'GET' ? 'params' : 'data'] = data
        axios(options).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}



export function serializeQuery(params) {
    return encodeURIComponent(params);
}
/**************************************************************************************************************/

export default {

    // store 店面
    // 站点信息
    siteUrl() {
        return `${urlPrefix.plat}`
    },
    queryStorePage(params) {
        return fetch(`${urlPrefix.plat}/store/queryStorePage`, params, 'POST', {
            'Content-Type': 'application/json'
        })
    },

    signUp(params) {
        return fetch(`${urlPrefix.plat}/user/signUp`, params, 'POST', {
            'Content-Type': 'application/json'
        })
    },
    login(params) {
        return fetch(`${urlPrefix.plat}/user/login`, params, 'POST', {
            'Content-Type': 'application/json'
        })
    }
}