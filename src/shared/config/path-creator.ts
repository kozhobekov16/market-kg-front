export const API_URL = process.env.NEXT_PUBLIC_DEV_API;

export const endPoint = (url: string) => `${API_URL}${url}`
export const baseUrl = (prefix: string) => (url: string | number) => `${API_URL}${prefix}${url}`