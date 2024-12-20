import * as yup from 'yup'

export const validations = (t) => ({
    // /^[A-Za-z0-9+_.-]+@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/
    emailId: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.EmailAddressCannotBeBlank'))
        .matches(
            /^[A-Za-z0-9+_.-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,
            t('SignUpFormErrorMessage.EmailAddressIsInvalid'),
        ),
    countryCode: yup.string().required(t('SignUpFormErrorMessage.CountryCanNotBeBlank')),
    mobileNo: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.MobileCanNotBeBlank'))
        .matches(/^\d+$/, t('SignUpFormErrorMessage.MobileMustBeInNumber')),
    // mobileNo: yup
    //     .string()
    //     .required(t('SignUpFormErrorMessage.MobileCanNotBeBlank'))
    //     .when('countryCode', (countryCode, schema) => {
    //         let isSchema
    //         switch (countryCode[0]) {
    //             case '86':
    //                 isSchema = schema.matches(/^\d{11}$/, t('SignUpFormErrorMessage.MobileMustBeInNumber'))
    //                 break
    //             case '852':
    //                 isSchema = schema.matches(/^\d{8}$/, t('SignUpFormErrorMessage.MobileMustBeInNumber'))
    //                 break
    //             case '853':
    //                 isSchema = schema.matches(/^\d{8}$/, t('SignUpFormErrorMessage.MobileMustBeInNumber'))
    //                 break
    //             default:
    //                 isSchema = schema.matches(/^\d+$/, t('SignUpFormErrorMessage.MobileMustBeInNumber'))
    //                 break
    //         }
    //         return isSchema
    //     }),
    password: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.PasswordCannotBeBlank'))
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, t('SignUpFormErrorMessage.PasswordIsInvalid')),
    confirmPassword: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.ConfirmPasswordBeBlank'))
        .oneOf([yup.ref('password'), null], t('SignUpFormErrorMessage.ConfirmPasswordIsNotMatch')),
    title: yup.string().required(t('SignUpFormErrorMessage.TitleCannotBeBlank')),
    lastname: yup
        .string()
        .required(t('SignUpFormErrorMessage.LastNameCannotBeBlank'))
        .matches(/^[A-Za-z\s]*[A-Za-z]+[A-Za-z\s]*$/, t('SignUpFormErrorMessage.LastNameMustBeInEnglishAndAlphabet')),
    firstname: yup
        .string()
        .required(t('SignUpFormErrorMessage.FirstNameCannotBeBlank'))
        .matches(/^[A-Za-z\s]*[A-Za-z]+[A-Za-z\s]*$/, t('SignUpFormErrorMessage.FirstNameMustBeInEnglishAndAlphabet')),
    chineseName: yup
        .string()
        .nullable()
        .notRequired()
        .matches(/^[\u4e00-\u9fa5]*$/, t('SignUpFormErrorMessage.ChineseNameMustBe')),
    nickname: yup.string().matches(/^[A-Za-z]*$/, t('SignUpFormErrorMessage.NicknameMustBeInEnglishAndAlphabet')),
    monthOfBirth: yup.string().required(t('SignUpFormErrorMessage.MonthCannotBeBlank')),
    yearOfBirth: yup.string().required(t('SignUpFormErrorMessage.YearCannotBeBlank')),
    languagePreference: yup.string(),
    residentialArea: yup.string().required(t('SignUpFormErrorMessage.ResidentialAreaCannotBeBlank')),
    province: yup.string().when('residentialArea', ([other], schema) => {
        return other === 'CHN' ? schema.required(t('SignUpFormErrorMessage.ProvinceCannotBeBlank')) : schema
    }),
    district: yup.string().when('residentialArea', ([other], schema) => {
        return other === 'HKG' ? schema.required(t('SignUpFormErrorMessage.DistrictCannotBeBlank')) : schema
    }),
    eNewIndicator: yup.bool().oneOf([true], t('SignUpFormErrorMessage.PleaseAcceptTheTermsCondition')),
})

// 登陆时候密码不需要提示
export const requiredValidations = (t) => ({
    password: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.PasswordCannotBeBlank')),
    confirmPassword: yup
        .string()
        .transform((value) => value.trim())
        .required(t('SignUpFormErrorMessage.PasswordCannotBeBlank'))
        .oneOf([yup.ref('password'), null], t('SignUpFormErrorMessage.ConfirmPasswordIsNotMatch')),
})
