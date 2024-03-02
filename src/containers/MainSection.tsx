import React, { type ReactElement, useState } from 'react'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ModalWindow from '../components/ModalWindow'
import { type StoreState } from '../store'

interface Post {
  title: string
  description: string
}

const MainSection = (): ReactElement => {
  const { t } = useTranslation()
  const posts = useSelector((state: StoreState) => state.posts.posts)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const openModal = (post: Post): void => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setSelectedPost(null)
    setIsModalOpen(false)
  }

  const renderPosts = (): ReactElement | null => {
    if (posts.length === 0) {
      return null
    }

    return (
      <div className="card border-0">
        <div className="card-body"><h2 className="card-title h4">{t('posts')}</h2></div>
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

              <Button text={t('watch')}
                      type={'button'}
                      isOutlinePrimary
                      onClick={() => openModal({ title, description })}
              />
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

      {isModalOpen && selectedPost !== null && <ModalWindow post={selectedPost} onClose={closeModal} />}

    </section>
  )
}

export default MainSection
export type { Post }
