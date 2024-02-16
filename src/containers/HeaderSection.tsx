import React, { type ReactElement, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RssForm from '../components/RssForm'

const HeaderSection = (): ReactElement => {
  const [isUrlValid, setIsUrlValid] = useState<boolean>(true)

  return (
    <section className="container-fluid bg-dark p-5">
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto text-white">
            <h1 className="display-3 mb-0">RSS агрегатор</h1>
            <p className="lead">Начните читать RSS сегодня! Это легко, это красиво.</p>
            <RssForm setIsUrlValid={setIsUrlValid} />
            <p className="mt-2 mb-0 opacity-50">Пример: https://lorem-rss.hexlet.app/feed</p>
            <p className="feedback m-0 position-absolute small text-danger">{isUrlValid ? null : 'Ссылка должна быть валидным URL'}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeaderSection
