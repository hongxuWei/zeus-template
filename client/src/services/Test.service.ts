import { get, post } from './index'

export const getTestData = (params: object) => get('/test/', params)
