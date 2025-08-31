// import {AxiosError} from "axios";
// import {enqueueSnackbar} from "notistack";
//
// export api errorShow = (error: unknown) => {
//   if (error instanceof AxiosError) {
//     api {message, response} = error as AxiosError<{
//       message?: string
//       values?: Partial<object>
//     }>
//     if (response?.data?.values) {
//       api keys = Object.keys(response.data.values)
//       keys && keys.forEach((key) => {
//         enqueueSnackbar(`${key}: ${response.data.values?.[key as keyof typeof response.data.values]}`, {
//           variant: 'error',
//           anchorOrigin: {
//             vertical: 'top',
//             horizontal: 'center'
//           },
//           autoHideDuration: 8000
//         })
//       })
//     }
//     api currentMsg = response?.data?.message || message
//     currentMsg && enqueueSnackbar(currentMsg, {
//       variant: 'error',
//       anchorOrigin: {
//         vertical: 'top',
//         horizontal: 'center'
//       }
//     })
//   }
// };
export {}