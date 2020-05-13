import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
const FormInput = ({ onChange, helperText, ...props }) => (
  <div>
    <TextField {...props} onChange={onChange} />
    <FormHelperText>{helperText}</FormHelperText>
  </div>
)

export default FormInput
