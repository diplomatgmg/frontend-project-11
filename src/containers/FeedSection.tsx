import React, { type ReactElement } from 'react'

const FeedSection = (): ReactElement => {
  return (
    <div className="col-md-10 col-lg-4 mx-auto order-0 order-lg-1 feeds">
      <div className="card border-0">
        <div className="card-body"><h2 className="card-title h4">Фиды</h2></div>
        <ul className="list-group border-0 rounded-0">
          <li className="list-group-item border-0 border-end-0"><h3 className="h6 m-0">Lorem ipsum feed for an
            interval of 1 minutes with 10 item(s)</h3><p className="m-0 small text-black-50">This is a constantly
            updating lorem ipsum feed</p></li>
        </ul>
      </div>
    </div>
  )
}

export default FeedSection
