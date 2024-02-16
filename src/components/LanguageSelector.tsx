import React, { type ChangeEvent, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

type Language = 'en' | 'ru'

const LanguageSelector = (): ReactElement => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: Language): void => {
    void i18n.changeLanguage(language)
  }

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const language = event.target.value as Language
    changeLanguage(language)
  }

  return (
    <div className="col-auto">
      <select className="form-select"
              onChange={handleLanguageChange}
              id="language-select"
              value={i18n.language}>

        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default LanguageSelector
