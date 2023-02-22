import {Box, Checkbox, TextArea} from '@sanity/ui'
import React, {forwardRef} from 'react'
import {FieldError} from 'react-hook-form'

import FormFieldInputLabel from '../FormFieldInputLabel'

type Props = {
  description?: string
  disabled?: boolean
  error?: FieldError
  label: string
  name: string
  placeholder?: string
  rows?: number
  value?: string
}

type Ref = HTMLTextAreaElement

const FromFieldInputCheckbox = forwardRef<Ref, Props>((props: Props, ref) => {
  const {description, disabled, error, label, name, placeholder, rows, value} = props

  return (
    <Box>
      {/* Label */}
      <FormFieldInputLabel description={description} error={error} label={label} name={name} />

      {/* Input */}
      <Checkbox
        defaultValue={value}
        disabled={disabled}
        id={name}
        name={name}
        placeholder={placeholder}
        // @ts-ignore
        ref={ref}
        rows={rows}
      />
    </Box>
  )
})

export default FromFieldInputCheckbox
