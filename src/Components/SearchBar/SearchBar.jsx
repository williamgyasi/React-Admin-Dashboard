import React from 'react'
import {TextInput,SearchG} from './searchbar-styles'
import {Search} from '@mui/icons-material'

function SearchBar() {
  return (
    <SearchG>
        <Search />
        <TextInput/>
    </SearchG>
  )
}

export default SearchBar