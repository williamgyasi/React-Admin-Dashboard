import React from 'react'
import {HeadG,TitleLg} from './header-styles'

import {SearchBar} from '..'

function Header() {
  return (
    <HeadG>
      <TitleLg>Welcome,Huss Smith</TitleLg>
      <SearchBar />
    </HeadG>
  )
}

export default Header