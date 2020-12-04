import { get } from 'lodash'

export const isProd = () => process.env.NODE_ENV.toLowerCase() === 'production'
