import React, { type FC, type ReactElement } from 'react'

interface InputProps {
  id: string
}

const Input: FC<InputProps> = ({ id }): ReactElement => {
  return (
    <input id={id}
           placeholder=""
           name="url"
           aria-label="url"
           className="form-control w-100"
           autoComplete="off"/>
  )
}

export default Input
