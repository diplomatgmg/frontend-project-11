import React, { type ReactElement } from 'react'
import Form from './Form'

const HeaderSection = (): ReactElement => {
  return (
    <section className="container-fluid bg-dark p-5">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-white">
          <h1 className="display-3 mb-0">RSS агрегатор</h1>
          <p className="lead">Начните читать RSS сегодня! Это легко, это красиво.</p>
          <Form/>
          <p className="mt-2 mb-0 opacity-50">Пример: https://lorem-rss.hexlet.app/feed</p>
          <p className="feedback m-0 position-absolute small text-danger"></p></div>
      </div>
    </section>
  )
}

export default HeaderSection
