import React, { type ReactElement } from 'react'
import HeaderSection from '../containers/HeaderSection'
import MainSection from '../containers/MainSection'

const App = (): ReactElement => {
  return (
    <main className="flex-grow-1">
      <HeaderSection/>
      <MainSection/>
    </main>
  )
}

export default App
