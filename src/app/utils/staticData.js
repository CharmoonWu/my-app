import { range, reverse } from 'ramda'
import dayjs from 'dayjs'

export const languageEnUSList = [
    {
        value: 'en_US',
        label: 'English',
    },
    {
        value: 'zh_HK',
        label: 'Traditional Chinese',
    },
    {
        value: 'zh_CN',
        label: 'Simplified Chinese',
    },
]

export const languagezhCNList = [
    {
        value: 'en_US',
        label: '英语',
    },
    {
        value: 'zh_HK',
        label: '繁体中文',
    },
    {
        value: 'zh_CN',
        label: '简体中文',
    },
]

export const languagezhHKList = [
    {
        value: 'en_US',
        label: '英語',
    },
    {
        value: 'zh_HK',
        label: '繁體中文',
    },
    {
        value: 'zh_CN',
        label: '簡體中文',
    },
]

// [2009 - 1924]
export const yearList = reverse(range(dayjs().year() - 100, dayjs().year() - 15 + 1).map((v) => String(v)))

export const IASMError = ['D50001', 'D40001', 'D40000', 'D40003', 'D50002', 'D50003', 'D40004', 'D40002']

export const iasmLangObj = {
    en_US: 'en-US',
    zh_HK: 'zh-HK',
    zh_CN: 'zh-CN',
}

export const ErrorCode = [
    'SSO001',
    'SSO002',
    'SSO003',
    'SSO004',
    'SSO005',
    'SSO006',
    'SSO007',
    'SSO008',
    'SSO009',
    'SSO010',
    'SSO011',
    'SSO012',
    'SSO013',
    'SSO014',
    'SSO015',
    'SSO016',
    'SSO017',
    'SSO018',
    'SSO999',
    'SSO400',
    'SSO021',
    'SSO022',

    '60001',
    '60010',
    '60011',
    '60022',
    '60003',
    '60012',
    '60013',
    '60014',
    '60018',
    '60015',
    '60021',
    '60016',
    '60017',
    '60020',
    '60019',
    '60023',
    '60024',
    '60025',
    '60026',
    '60027',

    '92001',
    // '92002',
    '92003',
    '92004',
    '92005',
    '30004',
    'D50001',
    'D50002',
    'D50003',

    '00001',
    '11000',
    '99999',
    '13000',
    '32002',
    '32004',
    '32005',
    '42002',
    '42003',
    '42004',
    '42005',
    '42007',

    '60029',
    '60030',
    '60031',
    '60032',
    '60005',
    '60006',
    '60007',
]
