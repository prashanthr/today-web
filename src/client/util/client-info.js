import axios from 'axios'
import { debug, logErrorToConsole } from './debug'
import { getLocalStorage, setLocalStorage } from './local-storage'
import { getCountry, getLocationFromTZ } from './location'
import config from '../config'
/**
 * {
  "ip": "10.22.34.175",
  "hostname": "10.22.34.175.public.comcast.net",
  "city": "San Francisco",
  "region": "California",
  "country": "US",
  "loc": "32.7142,-102.7056",
  "org": "Comcast Inc",
  "postal": "94005",
  "timezone": "America/Los_Angeles",
  "readme": "https://ipinfo.io/missingauth"
 }  
 */
export const getClientInfo = async () => {
  let data = {}
  const defaultCountry = getCountry()
  const defaultLocation = getLocationFromTZ()
  const localStorageKey = 'client-info'
  try {
    const cachedClientInfo = getLocalStorage(localStorageKey)
    if (!cachedClientInfo) {
      const res = await axios.get(config.ipUrl)
      setLocalStorage('client-info', res.data, new Date().getTime() + config.app.cache.ttl)
      data = {
        ...data,
        ...res.data,
        country: defaultCountry,
        location: `${res.data.city},${defaultCountry}`
      }
    } else {
      data = {
        ...data,
        ...cachedClientInfo,
        country: defaultCountry,
        location: `${cachedClientInfo.city},${defaultCountry}`
      }
    }
  } catch(err) {
    const errMsg = 'Error getting client data'
    logErrorToConsole(errMsg, err.message)
    debug(errMsg, err)
    data = {
      ...data,
      country: defaultCountry,
      location: defaultLocation
    }
  } finally {
    debug('Resolved client data', data)
    return data
  }
}
