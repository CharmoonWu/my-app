import axios from 'axios'
import qs from 'qs'
import { indexOf } from 'ramda'
import i18n from 'i18next'

import { IASMError, ErrorCode } from 'utils/staticData'

export const BASE_URL = 'https://ktsp-api-dev.hkphub.com/api'

const errMsg = (code: string) => {
    if (indexOf(code, ErrorCode) !== -1) {
        return i18n.t(`ErrorCode.${code}`)
    } else {
        return i18n.t(`ErrorCode.99999`)
    }
}

// const ktspUrl = process.env.NODE_ENV === 'development' ? BASE_URL : process.env.REACT_APP_BASE_URL + BASE_URL

export const http = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: function (params: any) {
        return qs.stringify(params, { arrayFormat: 'repeat', allowDots: true }) /// 传递数组 paramsSerializer序列化 ids:[1,2,3] -> ids=1&ids=2&id=3
    },
})

http.interceptors.request.use(async (config) => {
    //   const token = await localStorage.getItem("Authorization");
    //   if (token) {
    //     config.headers = {
    //       ...config.headers,
    //       token,
    //     };
    //   }
    return config
})

http.interceptors.response.use(({ data, status }) => {
    
    if (data instanceof Blob) {
        return data
    }
    if (status === 200 && data.errorCode === '00000') {
        return data.result
    } else if (status === 200 && indexOf(data.errorCode, IASMError) !== -1) {
        return data
    } else {
        throw errMsg(data.errorCode)
    }
})
