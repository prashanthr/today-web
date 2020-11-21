import axios from 'axios'
import { get } from 'lodash'
import { debug } from '../util/debug'
import config from '../config'

const initialState = {
	name: 'Stranger',
	isLoading: true,
	error: false
}

export const buildInitialState = (data) => {
	return {
		...data,
		...initialState
	}
}

const getDataUrl = (params) => {
	const { weatherUnit, historyLimit, newsLimit, country, location } = params
  // return `${config.baseUrl}/health`
  return `${config.baseUrl}/today?location=${encodeURIComponent(location)}&country=${country}&wod_unit=${weatherUnit}&hod_limit=${historyLimit}&nod_limit=${newsLimit}`
}

export const getData = async (params) => {
	try {
    const res = await axios.get(getDataUrl(params))
    debug('apiResult', res.data)
		return adaptDataForClient({ initData: params, data: res.data })
	} catch (err) {
		debug('Error fetching data from source', err)
		return {
			...buildInitialState(params),
			isLoading: false,
			error: true,
			errorMessage: 'Oops. Unable to get data at this time :( Try again later!'
		}
	}
}

const adaptDataForClient = ({ initData, data }) => {
	const finalData = {
		...buildInitialState(initData),
		...data,
		isLoading: false,
		error: false,
		qod: get(data, 'qod[0]', {})
  }
  debug('adapteddata', finalData)
	return finalData
}
