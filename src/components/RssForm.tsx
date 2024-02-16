import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { isValidUrl } from '../utils/helpers'
import { useTranslation } from 'react-i18next'

interface RssFormProps {
  setIsUrlValid: (value: boolean) => void
}

const RssForm: FC<RssFormProps> = ({ setIsUrlValid }): ReactElement => {
  const { t } = useTranslation()
  const [input, setInput] = useState<string>('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    isValidUrl(value) ? setIsUrlValid(true) : setIsUrlValid(false)
    setInput(value)
  }

  return (
    <Form action="">
      <Row>
        <Col>
          <Form.Group className="form-floating">
            <Form.Control
              value={input}
              onChange={handleInput}
              id='url-input'
              placeholder=''
              name="url"
              aria-label="url"
              autoComplete="off"/>
            <Form.Label htmlFor="url-input">{t('rssLink')}</Form.Label>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button type="submit"
                  aria-label="add"
                  className="h-100 btn-lg px-sm-5">
            {t('add')}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default RssForm
