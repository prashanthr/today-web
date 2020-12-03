import React, { useState } from 'react'
import Text from '../text'
import { FormControls } from '@universal-apps/swan-react'

const Location = ({ location, onChange }) => {
  const [state, setState] = useState({ 
    text: location,
    inEdit: false,
    input: {
      text: location
    }
  })
  const LocationText = ({ text }) => (
    <Text color='secondary'>
      {text}
    </Text>
  )
  const EditableLocationText = ({ text }) => (
    <FormControls.TextInput
      className={''}
      value={text}
      placeholder={''}
      // onChange={event => onChange({ event })}
      // onKeyUp={event => onKeyUp({ event })}
      onFormSubmit={event => event.preventDefault()}
    />
  )
  return state.inEdit 
    ? <EditableLocationText text={state.text} />
    : <LocationText text={state.text} />
}

export default Location
