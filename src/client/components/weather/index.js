import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { isEmpty } from 'lodash'
import UnitSelector from './unit-selector'
import Location from './location'
import './index.css'

const Weather = ({ data, unit, onDataHookChange }) => {
	const { weather, main, visibility, wind, name, sys } = data
	return (
		<>
			{!isEmpty(data) && (
				<>
				<Text color='primary'>
						Today's foecast (for&nbsp;
								<Location 
									location={`${name}, ${sys.country}`}
									onChange={onDataHookChange}
								/>
							)&nbsp;
							<UnitSelector
								unit={unit}
								onChange={onDataHookChange}
							/>
						<br />
						<Text bold color='tertiary' className=''>
							{weather[0].description}&nbsp;
						</Text>
						<Text>
							(Current: <Text color='secondary'>{main.temp}</Text>, Feels: <Text color='secondary'>{main.feels_like}</Text>, Min/Max: <Text color='secondary'>{main.temp_min}</Text>/<Text color='secondary'>{main.temp_max}</Text>, 💨: <Text color='secondary'>{wind.speed}</Text>, 🌫️: <Text color='secondary'>{visibility}</Text>)
						</Text>
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
