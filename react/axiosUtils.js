/**
 * axios post请求
 */
import axios from 'axios';
import Qs from 'qs';

export const post = (url, params) => axios({
    method: 'post',
    url,
    data: {
        ...params,
    },
    transformRequest: [function (data, headers) { // eslint-disable-line
        data = Qs.stringify(data);
        return data;
    }],
});

export const get = (url, param) => axios.get(url, {
    params: {...param},
});

export const upload = (url, params) => {
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    let param = new FormData();
    for (let key in params) {
        param.append(key, params[key]);
    }
    return axios.post(url, param, config);

};
