import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { isEmpty } from 'lodash'
import UnitSelector from './unit-selector'
import Location from './location'
import './index.css'
import Table from '../table'
import { Button } from '@universal-apps/swan-react'

const WeatherTable = ({ data }) => {
	const { weather, main, visibility, wind, name, sys } = data
	return (
		<Table
			showHeader={false}
			rows={[{
				category: 'Forecast',
				value: (
					<Text bold color='tertiary' className=''>
						{weather[0].description}&nbsp;
					</Text>
				)
			}, {
				category: 'Current',
				value: (<Text color='secondary'>{main.temp}</Text>)
			}, {
				category: 'Feels',
				value: (<Text color='secondary'>{main.feels_like}</Text>)
			}, {
				category: 'Min/Max',
				value: (<Text color='secondary'>{main.temp_min}/{main.temp_max}</Text>)
			}, {
				category: 'Wind',
				value: (<Text color='secondary'>{wind.speed}</Text>)
			}, {
				category: 'Visibility',
				value: (<Text color='secondary'>{visibility}</Text>)
			}]}
		/>
	)
}

const WeatherText = ({ data }) => {
	const { weather, main, visibility, wind, name, sys } = data
	return (
		<>
			<Text bold color='tertiary' className=''>
				{weather[0].description}&nbsp;
			</Text>
			<Text>
				(Current: <Text color='secondary'>{main.temp}</Text>, Feels: <Text color='secondary'>{main.feels_like}</Text>, Min/Max: <Text color='secondary'>{main.temp_min}</Text>/<Text color='secondary'>{main.temp_max}</Text>, Wind: <Text color='secondary'>{wind.speed}</Text>, Viz: <Text color='secondary'>{visibility}</Text>)
			</Text>
		</>
	)
}

const Weather = ({ data, unit, onDataHookChange }) => {
	const { weather, main, visibility, wind, name, sys } = data
	const [isCondensedView, setCondensedView] = useState(false)
	return (
		<>
			{!isEmpty(data) && (
				<>
				<Text color='primary'>
						Today's weather for&nbsp;
								<Location 
									location={`${name}, ${sys.country}`}
									onUpdate={onDataHookChange}
								/>
							<br />
							<Button
								className='today-web-weather-view-btn'
								value={isCondensedView ? 'Expand' : 'Condense'}
								onClick={e => setCondensedView(!isCondensedView)}
							/>
							<UnitSelector
								unit={unit}
								onChange={onDataHookChange}
							/>
						<br />
						{isCondensedView 
							? <WeatherText data={data} /> 
							: <WeatherTable data={data} />
						}
				</Text>
				</>
			)}
		</>
	)
}

Weather.defaultProps = {
	data: {}
}

Weather.propTypes = {
	data: PropTypes.object
}


export default Weather
