import React, { type ReactElement, useEffect } from 'react'
import HeaderSection from '../containers/HeaderSection'
import MainSection from '../containers/MainSection'
import { useTranslation } from 'react-i18next'

const App = (): ReactElement => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage !== null) {
      void i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  useEffect(() => {
    localStorage.setItem('language', i18n.language)
  }, [i18n.language])

  return (
    <main className="flex-grow-1">
      <HeaderSection/>
      <MainSection/>
    </main>
  )
}

export default App
