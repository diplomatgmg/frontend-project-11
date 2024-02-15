import React, { type ReactElement } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const RssForm = (): ReactElement => {
  return (
    <Form action="">
      <Row>
        <Col>
          <Form.Group className="form-floating">
            <Form.Control id='url-input'
                   placeholder=""
                   name="url"
                   aria-label="url"
                   autoComplete="off"/>
            <Form.Label htmlFor="url-input">Ссылка RSS</Form.Label>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button type="submit"
                  aria-label="add"
                  className="h-100 btn-lg px-sm-5">
            Добавить
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default RssForm
