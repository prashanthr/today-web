import { useEffect, useState } from 'react'
import { getData, buildInitialState  } from '../api'
import config from '../config'
import { getCountry, getLocationGracefully } from '../util/location'
import { debug } from '../util/debug'

const appDefaults = config.app.defaults

export const useData = ({ initData }) => {
  const [data, setData] = useState(buildInitialState(initData));
	useEffect(() => {
    const fetchData = async (props) => {
			const result = await getData({
        ...props,
        weatherUnit: 'imperial',
        historyLimit: 3,
        newsLimit: 5,
        country: getCountry(),
        location: await getLocationGracefully()
      })
			setData(result)
    };
    fetchData()
  }, [initData])
  return data
}