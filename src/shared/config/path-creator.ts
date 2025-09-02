export const API_URL = process.env.NEXT_PUBLIC_API_URL;
// export const API_URL = 'http://api.marketplace.kg:4646/api/v2';

export const endPoint = (url: string) => `${API_URL}${url}`
export const baseUrl = (prefix: string) => (url: string | number) => `${API_URL}${prefix}${url}`