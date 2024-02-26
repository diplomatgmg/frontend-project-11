import React, { type FC, type ReactElement } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  type: 'button' | 'submit'
  isPrimary?: boolean
  isOutlinePrimary?: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ text, type, isPrimary, isOutlinePrimary, onClick }): ReactElement => {
  const className = classNames('btn', 'btn-sm', {
    'btn-primary': isPrimary,
    'btn-outline-primary': isOutlinePrimary
  })

  return (
    <button type={type}
            className={className}
            onClick={onClick}
            data-id="12"
            data-bs-toggle="modal"
            data-bs-target="#modal">{text}
    </button>
  )
}

export default Button
