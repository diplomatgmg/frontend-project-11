import React, { type ReactElement } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RssForm from './RssForm'

const HeaderSection = (): ReactElement => {
  return (
    <section className="container-fluid bg-dark p-5">
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto text-white">
            <h1 className="display-3 mb-0">RSS агрегатор</h1>
            <p className="lead">Начните читать RSS сегодня! Это легко, это красиво.</p>
            <RssForm />
            <p className="mt-2 mb-0 opacity-50">Пример: https://lorem-rss.hexlet.app/feed</p>
            <p className="feedback m-0 position-absolute small text-danger"></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeaderSection
