import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { apiClient } from '@/api'
import SearchableSelect, { Option } from './SearchableSelect'

interface Props {
  property: Option
}

export default function SubCategoryPropretySelect({ property }: Props) {
  const [selectedOption, setSelectedOption] = useState<Option>()
  const [optionsOfSelectedOption, setOptionsOfSelectedOption] = useState<Option[]>([])

  const onChange = (event: React.SyntheticEvent, value: Option) => {
    setSelectedOption(value)
    getPropertyOptions(value)
  }

  const getPropertyOptions = async (property: Option) => {
    if (property.child) {
      await apiClient.get(`/get-options-child/${property.id}`).then((res) => {
        setOptionsOfSelectedOption(res.data.data)
      })
    }
  }

  return (
    <>
      <SearchableSelect
        options={[
          ...property?.options,
          {
            id: 'other',
            name: 'Other',
            child: false,
            options: [],
            parent: 0,
          },
        ]}
        label={property?.name}
        onChange={onChange}
        keyValue={property?.id}
      />

      {selectedOption?.name === 'Other' && (
        <TextField
          sx={{ width: 600, marginBottom: 2 }}
          label={`Enter ${property?.name}`}
          variant="outlined"
          size="small"
          id={`${property?.name.toLowerCase().replace(/\s+/g, '-')}-value-combo-box`}
        />
      )}

      {optionsOfSelectedOption.map((childProprety) => (
        <SubCategoryPropretySelect property={childProprety} key={childProprety.id} />
      ))}
    </>
  )
}
