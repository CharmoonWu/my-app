import { http } from 'utils/http'

/**
 * information API
 */
export const information = {
    getAdditionalInformation: (payload: any) => http.post('/information/getAdditionalInformation', payload),
}
