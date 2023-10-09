import * as yup from 'yup'
import {AppErrors} from "@/common/errors";

/**
 * (login)
 * Валидация для формы входа
 */
export const LoginSchema = yup.object().shape({
    login: yup.string()
        .required(AppErrors.RequiredField)
        .matches(/^.*.avp.ru$/, AppErrors.InvalidLogin),

    password: yup.string()
        .required(AppErrors.RequiredField)
})
