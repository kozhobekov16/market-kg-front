import dayjs from 'dayjs'
import * as yup from 'yup'

export function useYup() {
  const thisFieldIsRequired = 'Это поле обязательно к заполнению'
  const string = yup.string().required(thisFieldIsRequired)
  const number = yup.number().required(thisFieldIsRequired)
  const object = yup.object().required(thisFieldIsRequired)
  // api address = yup
  //   .object()
  //   .required(thisFieldIsRequired)
  //   .test('address', thisFieldIsRequired, (v) => {
  //     return v ? Boolean((v as Address)?.address) : false
  //   })
  const dateCheck = yup
    .string()
    .nullable()
    .test('check-if-string-is-valid-date', 'date-format-is-wrong', (v) => {
      if (!v) return true

      return dayjs(v).isValid()
    })
  const date = dateCheck.required(thisFieldIsRequired)
  const datePast = dateCheck.test('check-if-date-in-the-past', 'date-should-be-in-the-past', (v) => {
    if (!v) return true
    return dayjs(v).isBefore()
  })

  const file = yup.mixed().required('add-or-remove-this-field')
  const attachments = yup.array().of(yup.object({file}))

  const passportSeries = yup.string().test('short-then-9', 'passport-shor', (v) => {
    if (!v) return true
    return v.length >= 7
  })
  const password = yup
    .string()
    .required('Поля обязательно к заполнению')
    .min(8, 'Пароль должен быть минимум из 8 символов')
    .matches(/[a-zA-Z]/, 'Пароль должен содержать хотя бы один символ букв')
  return {
    ...yup,
    notRequired: {string: yup.string},
    string,
    number,
    object,
    date,
    datePast,
    file,
    attachments,
    // address,
    dateCheck,
    box: yup.object,
    passportSeries,
    password,
    thisFieldIsRequired,
  } as const
}
