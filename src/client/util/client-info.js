import axios from 'axios'
import { debug, logErrorToConsole } from './debug'
import { getLocalStorage, setLocalStorage } from './local-storage'
import { getCountry, getLocationFromTZ } from './location'
import config from '../config'
/**
 * {
  "ip": "52.119.119.173",
  "hostname": "52-119-119-173.public.monkeybrains.net",
  "city": "San Francisco",
  "region": "California",
  "country": "US",
  "loc": "37.7749,-122.4194",
  "org": "AS32329 Monkey Brains",
  "postal": "94103",
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
        ...cachedClientInfo
      }
    }
  } catch(err) {
    logErrorToConsole('Error getting client data', err.message)
    debug('Error getting client data', err)
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
