import React, { type ReactElement } from 'react'
import { Row, Col } from 'react-bootstrap'

const MainSection = (): ReactElement => {
  return (
    <section className="container-fluid container-xxl p-5">
      <Row>
        <Col md={10} lg={8} order={1} className="mx-auto posts"></Col>
        <Col md={10} lg={4} order={0} order-lg={1} className="mx-auto feeds"></Col>
      </Row>
    </section>
  )
}

export default MainSection
