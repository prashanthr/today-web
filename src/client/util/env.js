import { get } from 'lodash'

export const getNodeEnv = () => get(process,'env.NODE_ENV', 'development').toLowerCase()
export const isProd = () => getNodeEnv() === 'production'
