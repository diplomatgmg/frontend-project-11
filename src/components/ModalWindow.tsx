import React, { type CSSProperties, type FC, type ReactElement } from 'react'
import { type Post } from '../containers/MainSection'

interface ModalWindowProps {
  post: Post
  onClose: () => void
}

const ModalWindow: FC<ModalWindowProps> = ({ post, onClose }): ReactElement => {
  const modalOverlay: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
  }

  return (
    <div>
      <div style={modalOverlay} onClick={onClose}></div>
      <div className="modal fade show" id="modal" tabIndex={-1} aria-labelledby="modal" style={{ display: 'block' }} aria-modal="true" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{post.title}</h5>
              <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-break">{post.description}</div>
            <div className="modal-footer">
              <a className="btn btn-primary full-article" href="https://example.com/test/1708946280" role="button" target="_blank" rel="noopener noreferrer">
                Читать полностью
              </a>
              <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
