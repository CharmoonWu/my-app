import { http } from 'utils/http'

/**
 * User API
 */
export const user = {
    getCountryCodeList: (payload: any) => http.post('/user/getCountryCodeList', payload),
    forgotPassword: (payload: any) => http.post('/user/forgotPassword', payload),
    resetPassword: (payload: any) => http.post('/user/resetPassword', payload),
}
