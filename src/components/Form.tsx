import React, { type ReactElement } from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

const Form = (): ReactElement => {
  return (
    <form action="" className="rss-form text-body">
      <div className="row">
        <div className="col">
          <div className="form-floating">
            <Input id={'url-input'}/>
            <Label htmlFor={'url-input'} text={'Ссылка RSS'}/>
          </div>
        </div>
        <div className="col-auto">
          <Button text={'Добавить'}/>
        </div>
      </div>
    </form>
  )
}

export default Form
