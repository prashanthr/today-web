import { useEffect, useState } from 'react'
import { getData  } from '../api'
import config from '../config'
import { getClientInfo } from '../util/client-info'
import { get } from 'lodash'

const appDefaults = config.app.defaults

export const useData = ({ initData }) => {
  const [data, setData] = useState(initData);
	useEffect(() => {
    const fetchData = async (props) => {
      const clientInfo = await getClientInfo()
      const result = await getData({
        ...props,
        weatherUnit: get(initData, 'weatherUnit', appDefaults.weatherUnit),
        historyLimit: get(initData, 'historyLimit', appDefaults.historyLimit),
        newsLimit: get(initData, 'newsLimit', appDefaults.newsLimit),
        ...clientInfo,
        location: get(initData, 'location', clientInfo.location)
      })
			setData(result)
    }
    fetchData()
  }, [initData])
  return data
}
