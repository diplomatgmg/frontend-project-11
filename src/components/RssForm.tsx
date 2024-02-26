import React, { type ChangeEvent, type FC, type FormEvent, type ReactElement, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { isValidUrl } from '../utils/helpers'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import parseXmlFromUrl from '../utils/parseXmlFromUrl'

interface RssFormProps {
  setIsUrlValid: (value: boolean) => void
  setIsRssLoaded: (value: boolean) => void
}

const RssForm: FC<RssFormProps> = ({ setIsUrlValid, setIsRssLoaded }): ReactElement => {
  const { t } = useTranslation()
  const [input, setInput] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleUrlInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    const isValid = isValidUrl(value)

    setIsFormValid(isValid)
    setIsUrlValid(isValid)
    setInput(value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault()

    if (!isFormValid) {
      return
    }

    const posts = await parseXmlFromUrl(input)
    setIsRssLoaded(true)
    dispatch({ type: 'SET_STATE', payload: posts })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="form-floating">
            <Form.Control
              value={input}
              onChange={handleUrlInputChange}
              id='url-input'
              placeholder=''
              name="url"
              aria-label="url"/>
            <Form.Label htmlFor="url-input">{t('rssLink')}</Form.Label>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button type="submit" aria-label="add" className="h-100 btn-lg px-sm-5">
            {t('add')}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default RssForm
