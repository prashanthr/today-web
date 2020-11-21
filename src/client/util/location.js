import axios from 'axios'
import { getTimeZone } from './datetime'
import { debug, logErrorToConsole } from './debug'

export const getCityFromTZ = () => {
	const tz = getTimeZone().toLowerCase()
	const resolved = tz.includes('/')
		? tz.substring(tz.indexOf('/') + 1, tz.length)
    : tz
  const result = resolved.replace('_', ' ')
  debug('getCityFromTZ', result)
  return result
}

export const getCityFromIp = async () => {
  let city
	try {
		const res = await axios.get('https://ipinfo.io')
		city = res.data.city.toLowerCase()
	} catch (err) {
    logErrorToConsole('Error getting ip address', err)
	} finally {
    debug('cityFromIp', city)
		return city
	}
}

export const getCountry = () => {
	const tz = getTimeZone().toLowerCase()
	if (tz.includes('/')) {
    const result = tz.substring(0, tz.indexOf('/'))
    debug('getCountry', result)
    return result
	} else {
    debug('getCountry', tz)
    return tz
	}
}

export const getLocationFromTZ = () => {
  const result = `${getCityFromTZ()},${getCountry()}`
  debug('getLocationFromTZ', result)
  return result
}

export const getLocationFromIp = async () => {
  const result = `${await getCityFromIp()},${getCountry()}`
  debug('getLocationFromIp', result)
  return result
}

export const getLocationGracefully = async () => {
  return getLocationFromTZ()
  let location
  try {
    location = await getLocationFromIp()
  } catch (err) {
    logErrorToConsole('Error getting location from IP', err.message)
    location = getLocationFromTZ()
  } finally {
    debug('getLocationGracefully', location)
    return location
  }
}
