import React, { type ReactElement } from 'react'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

interface Post {
  title: string
  description: string
}

const MainSection = (): ReactElement => {
  const posts = useSelector((state: any) => state.posts)

  const renderPosts = (): ReactElement | null => {
    if (posts.length === 0) {
      return null
    }

    return (
      <div className="card border-0">
        <div className="card-body"><h2 className="card-title h4">Посты</h2></div>
        <ul className="list-group border-0 rounded-0">
          {posts.map(({ title, description }: Post) => (
            <li key={title}
                className="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0">
              <a href="http://example.com/test/1708261080"
                 className="fw-bold"
                 data-id="16"
                 target="_blank"
                 rel="noopener noreferrer">
                {title}
              </a>

              <Button text={'Просмотр'} type={'button'} isOutlinePrimary></Button>
            </li>
          ))}
        </ul>

      </div>
    )
  }

  return (
    <section className="container-fluid container-xxl p-5">
      <div className="row">
        <div className="col-md-10 col-lg-8 order-1 mx-auto posts">
          {renderPosts()}
        </div>
      </div>
    </section>
  )
}

export default MainSection
