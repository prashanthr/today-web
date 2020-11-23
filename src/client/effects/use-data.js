import { useEffect, useState } from 'react'
import { getData, buildInitialState  } from '../api'
import config from '../config'
import { getClientInfo } from '../util/client-info'

const appDefaults = config.app.defaults

export const useData = ({ initData }) => {
  const [data, setData] = useState(buildInitialState(initData));
	useEffect(() => {
    const fetchData = async (props) => {
      const clientInfo = await getClientInfo()
      const result = await getData({
        ...props,
        weatherUnit: appDefaults.weatherUnit,
        historyLimit: appDefaults.historyLimit,
        newsLimit: appDefaults.newsLimit,
        ...clientInfo
      })
			setData(result)
    };
    fetchData()
  }, [initData])
  return data
}
