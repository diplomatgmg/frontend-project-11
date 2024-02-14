import React, { type FC, type ReactElement } from 'react'

interface LabelProps {
  htmlFor: string
  text: string
}

const Label: FC<LabelProps> = ({ htmlFor, text }): ReactElement => {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  )
}

export default Label
