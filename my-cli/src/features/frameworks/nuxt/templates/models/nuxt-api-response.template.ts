export function nuxtApiResponseTemplate(){
    return `
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}`
}
 