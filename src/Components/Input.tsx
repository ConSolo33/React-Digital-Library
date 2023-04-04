import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => {
  return (
    <TextField
        className='bg-slate-300 p-1'
        variant='outlined'
        margin='normal'
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >        
    </TextField>
  )
});

export default Input