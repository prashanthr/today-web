import { useEffect, useState } from 'react'
import { getData, buildInitialState  } from '../api'
import config from '../config'
import { getClientInfo } from '../util/client-info'
import { get } from 'lodash'

const appDefaults = config.app.defaults

export const useData = ({ initData }) => {
  const [data, setData] = useState(initData);
  console.log('useData init...')
	useEffect(() => {
    const fetchData = async (props) => {
      console.log('useData fetching...')
      const clientInfo = await getClientInfo()
      const result = await getData({
        ...props,
        weatherUnit: get(initData, 'weatherUnit', appDefaults.weatherUnit),
        historyLimit: get(initData, 'historyLimit', appDefaults.historyLimit),
        newsLimit: get(initData, 'newsLimit', appDefaults.newsLimit),
        ...clientInfo
      })
      console.log('useData setting...')
			setData(result)
    };
    console.log('useData about to fetch...')
    fetchData()
  }, [initData])
  console.log('useData returning...')
  return data
}
