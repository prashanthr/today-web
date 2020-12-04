import React, { useState, createRef } from 'react'
import Text from '../text'
import { FormControls } from '@universal-apps/swan-react'
import './location.css'

const Location = ({ location, onUpdate }) => {
  const inputRef = createRef()
  const [state, updateState] = useState({ 
    text: location,
    inEdit: false,
    input: {
      text: location,
      ref: inputRef
    }
  })
  const onTextInputChange = ({ event }) => {
   event.preventDefault()
    updateState({
      ...state,
      input: {
        ...state.input,
        text: event.target.value
      }
    })
  }
  const onTextInputEnd = ({ text }) => {
    updateState({
      ...state,
      text,
      input: {
        text
      },
      inEdit: false
    })
    // Callback
    if (onUpdate) {
      onUpdate({
        key: 'location',
        value: text
      })
    }
  }

  const onTextInputStart = () => {
    updateState({
      ...state,
      inEdit: true
    })
  }

  const onKeyUp = ({ event }) => {
    switch(event.keyCode) {
      // Enter or Return
      case 13:
        onTextInputEnd({ text: event.target.value })
        return
      // Esc
      case 27:
        onTextInputEnd({ text: state.text })
        return
      default:
        return
    }
  }

  const LocationText = ({ text }) => (
    <div>
      <Text color='secondary'>
        {text}
      </Text>
      <span className='location-edit-tip'>
        &nbsp;Click location to edit&nbsp;
      </span>
    </div>
  )

  return (
    <div className='weather-location' onClick={onTextInputStart}>
      {state.inEdit 
        ? (
          <div className='location-edit'>
            <FormControls.TextInput
              onFormSubmit={event => event.preventDefault()}
              defaultValue={state.text}
              placeholder={'Enter location (not co-ordinates)'}
              onChange={event => onTextInputChange({ event })}
              onKeyUp={event => onKeyUp({ event })}
              autoFocus
            />
          </div>
        )
        : <LocationText text={state.text} />
      }
    </div>
  )
}

export default Location
