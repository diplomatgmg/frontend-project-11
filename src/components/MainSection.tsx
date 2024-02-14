import React, { type ReactElement } from 'react'

const MainSection = (): ReactElement => {
  return (
    <section className="container-fluid container-xxl p-5">
      <div className="row">
        <div className="col-md-10 col-lg-8 order-1 mx-auto posts"></div>
        <div className="col-md-10 col-lg-4 mx-auto order-0 order-lg-1 feeds"></div>
      </div>
    </section>
  )
}

export default MainSection
