import React, { type FC, type ReactElement } from 'react'

interface ButtonProps {
  text: string
}

const Button: FC<ButtonProps> = ({ text }): ReactElement => {
  return (
    <button type="submit"
            aria-label="add"
            className="h-100 btn btn-lg btn-primary px-sm-5">
      {text}
    </button>
  )
}

export default Button
