import { http } from 'utils/http'

/**
 * Iam-Smart API
 */
export const iamsmart = {
    getToken: (payload: any) => http.post('/iamsmart/getToken', payload),
    initiateRequest: (payload: any) => http.post('/iamsmart/initiateRequest', payload),
    getProfile: (payload: any) => http.post('/iamsmart/getProfile', payload),
}
