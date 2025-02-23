import {Box, TextInput} from '@sanity/ui'
import React, {FormEventHandler, forwardRef} from 'react'
import {FieldError} from 'react-hook-form'

import FormFieldInputLabel from '../FormFieldInputLabel'

type Props = {
  description?: string
  disabled?: boolean
  error?: FieldError
  label: string
  name: string
  placeholder?: string
  value?: string
  type? : string
  onChange? : FormEventHandler<HTMLInputElement>
}

type Ref = HTMLInputElement

const FormFieldInputText = forwardRef<Ref, Props>((props: Props, ref) => {
  const {description, disabled, error, type, label, name, placeholder, value, onChange} = props

  return (
    <Box>
      {/* Label */}
      <FormFieldInputLabel description={description} error={error} label={label} name={name} />
      {/* Input */}
      <TextInput
        autoComplete="off"
        autoFocus
        defaultValue={value}
        disabled={disabled}
        id={name}
        onChange={onChange}
        // @ts-ignore
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </Box>
  )
})

export default FormFieldInputText
