import React, { type ReactElement } from 'react'
import HeaderSection from './HeaderSection'
import MainSection from './MainSection'

const App = (): ReactElement => {
  return (
    <main className="flex-grow-1">
      <HeaderSection/>
      <MainSection/>
    </main>
  )
}

export default App
