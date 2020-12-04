import React from 'react'
import PropTypes from 'prop-types'
import { FormControls } from '@universal-apps/swan-react'
import './unit.css'

const UnitSelector = ({ unit, onChange }) => (
  <div className={'weather-unit'}>
    <FormControls.RadioInput
      name={'units'}
      choices={[{
        id: 'imperial',
        value: 'imperial',
        label: '°F',
        isSelected: unit === 'imperial'
      }, {
        id: 'metric',
        value: 'metric',
        label: '°C',
        isSelected: unit === 'metric'
      }]}
      onChange={event => {
        onChange({
          key: 'weatherUnit',
          value: event.target.value
        })
      }}
    />
  </div>
)

UnitSelector.propTypes = {
  unit: PropTypes.string,
  onChange: PropTypes.func
}

export default UnitSelector
