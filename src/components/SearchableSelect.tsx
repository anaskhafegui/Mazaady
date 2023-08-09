import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export interface Option {
  id: string
  name: string
  child: boolean
  options: Option[]
  parent: number
}

interface Props {
  options: Option[]
  onChange: (event: React.SyntheticEvent, value: any) => void
  label: string
  keyValue?: string
}

export default function SearchableSelect({ options, onChange, label, keyValue }: Props) {
  return (
    <Autocomplete
      disableClearable
      id={`${label.toLowerCase().replace(/\s+/g, '-')}-combo-box`}
      options={options}
      sx={{ width: 600, marginBottom: 2 }}
      renderInput={(params) => <TextField {...params} label={`Select ${label}`} />}
      onChange={onChange}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      key={keyValue}
      size="small"
    />
  )
}
