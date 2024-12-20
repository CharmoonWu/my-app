import { useCallback, useEffect } from 'react'

import { useLangStore } from 'store/authAtom'

export const filterName = (val, lng) => {
    const valReturn = lng === 'en_US' ? val.nameEn : lng === 'zh_CN' ? val.nameCn : val.nameZh
    return valReturn
}

export const displayEmail = (emailId) => {
    if (!!emailId) {
        const [firstPart, secondPart] = emailId.split('@')
        const firstChars = firstPart.length > 4 ? firstPart.slice(0, 4) : firstPart.slice(0, 1)

        return `${firstChars}****@${secondPart}`
    } else {
        return null
    }
}

export const getNameByCode = (code = '', arr = []) => {
    const result = arr.find((item) => item.code === code)

    return result ? result.name : null
}

export const getNameByIsoCode = (isoCode = '', arr = []) => {
    const result = arr.find((item) => item.isoCode === isoCode)

    return result ? result.name : null
}

export const getContentType = (type = '', arr = []) => {
    const result = arr.find((item) => item.type === type)

    return result ? result.content : null
}

export const RemoveCookie = (cookieName) => {
    // document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `${cookieName}=; Secure; SameSite=None; domain=${process.env.REACT_APP_DOMAINS}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const useUpdateErrorMessages = (errors, trigger) => {
    const lang = useLangStore((state) => state.lang)

    const updateErrorMessages = useCallback(() => {
        Object.keys(errors).forEach((fieldName) => {
            trigger(fieldName)
        })
    }, [errors, trigger])

    useEffect(updateErrorMessages, [lang, updateErrorMessages])
}
