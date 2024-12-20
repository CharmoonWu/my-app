import { useTranslation } from 'react-i18next'

import { validations, requiredValidations } from 'utils/validationSchema'

export function useValidationI18n() {
    const { t } = useTranslation()
    const validationSchema = validations(t)
    const requiredValidationsSchema = requiredValidations(t)

    return {
        validationSchema,
        requiredValidationsSchema,
    }
}
