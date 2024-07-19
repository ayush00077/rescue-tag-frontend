import React from 'react'
import InputText from './inputComponent/InputText'

export default function FromComponent(props) {
  const FORM_JSON = {
    text : <InputText {...props} />,
    autoComplete : <InputText {...props} />
  }
  return (
    <>{FORM_JSON[props.type]}</>
  )
}
