import React from 'react';

export type MenType = {
  name: string
  age: number
  lessons: Array<{ title: string; name?: string }>
  address: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: MenType
  food: Array<string>
  car: {model:string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...restProps}) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>
        {restProps.car.model}
      </div>
    </div>
  )
}