import CryptoJS from 'crypto-js'

export function encrypt(data) {
    // const secretKey = process.env.REACT_APP_SECRET_KEY
    // const key = CryptoJS.enc.Utf8.parse(secretKey)

    // const secretIV = '0000000000000000'
    // const iv = CryptoJS.enc.Hex.parse(secretIV)

    // const encrypted = CryptoJS.AES.encrypt(data, key, {
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7,
    // })

    // // Encrypt
    // return encrypted.toString()
    return data
}

export function decrypt_P3(ciphertext) {
    // const secretKey = process.env.REACT_APP_SECRET_KEY
    // const key = CryptoJS.enc.Utf8.parse(secretKey)

    // const secretIV = '0000000000000000'
    // const iv = CryptoJS.enc.Hex.parse(secretIV)

    // const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7,
    // })

    // // Decrypt
    // return decrypted.toString(CryptoJS.enc.Utf8)
    return ciphertext
}

// const secretKey = process.env.REACT_APP_AES_SECRET_KEY
// const key = CryptoJS.enc.Utf8.parse(secretKey)
// const iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_SECRET_KEY_IV)

// 加密函数
export const encrypt_signUp = (text) => {
    // const message = CryptoJS.enc.Utf8.parse(text)
    // return CryptoJS.AES.encrypt(message, key, {
    //     iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7,
    // }).toString()
    return text
}

// 解密函数
export const decrypt_signUp = (ciphertext) => {
    // const key = CryptoJS.enc.Utf8.parse(secretKey)
    // const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    //     iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7,
    // })
    // return bytes.toString(CryptoJS.enc.Utf8)
    return ciphertext
}
