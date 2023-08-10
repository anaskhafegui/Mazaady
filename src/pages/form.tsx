import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import SubCategoryPropretySelect from '@/components/SubCategoryPropretySelect'
import { apiClient } from '@/api'
import SearchableSelect, { Option } from '@/components/SearchableSelect'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

interface Proparty {
  parent: number
  property: string
  value: string
}

export default function Home() {
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState<Option>()
  const [selectedSubCategory, setSelectedSubCategory] = useState<Option>()
  const [subCategoryProparties, setSubCategoryProparties] = useState([])
  const [selectedProparties, setSelectedProparties] = useState<Record<string, string>>({})

  useEffect(() => {
    apiClient.get('/get_all_cats').then((res) => {
      setCategories(res.data.data.categories)
    })
  }, [])

  const onCategoryChange = (event: React.SyntheticEvent, value: any) => {
    setSubCategories(value ? value.children : [])
    setSubCategoryProparties([])
    setSelectedCategory(value)
    setSelectedSubCategory(undefined)
  }

  const onSubCategoryChange = (event: React.SyntheticEvent, value: any) => {
    setSelectedSubCategory(value)
    apiClient.get(`/properties?cat=${value.id}`).then((res) => {
      setSubCategoryProparties(res.data.data)
    })
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    const data = Array.from(form.querySelectorAll('input')).reduce(
      (acc: Record<string, string>, input) => {
        acc[input.id.replace('-combo-box', '')] = `${input.value}`
        return acc
      },
      {}
    )

    setSelectedProparties(data)
  }

  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ display: 'flex' }}>
        <div className={`flex flex-col items-center justify-between p-24`}>
          {/* Main Categorty Select */}
          <SearchableSelect options={categories} onChange={onCategoryChange} label="Category" />

          {/* Sub Category Select */}
          {selectedCategory && (
            <SearchableSelect
              options={subCategories}
              onChange={onSubCategoryChange}
              label="Sub Category"
              key={selectedCategory?.id}
            />
          )}

          {/* Sub Category Proparties Select */}
          {subCategoryProparties.map((property: Option) => (
            <SubCategoryPropretySelect property={property} key={property.id} />
          ))}

          <Button variant="outlined" type="submit">
            Submit
          </Button>

          <TableContainer component={Paper} sx={{ width: 600, marginTop: 6 }}>
            <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Property</TableCell>
                  <TableCell align="left">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(selectedProparties).map(([proparty, value]) => (
                  <TableRow key={proparty}>
                    <TableCell align="left">{proparty}</TableCell>
                    <TableCell align="left">{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </FormControl>
    </form>
  )
}
