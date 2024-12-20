import { http } from 'utils/http'

/**
 * SSO Crm Apis Controller
 */

export const crm = {
    checkProfileExist: (payload: any) => http.post('/crm/checkProfileExist', payload),
    userBind: (payload: any) => http.post('/crm/userBind', payload),
}
