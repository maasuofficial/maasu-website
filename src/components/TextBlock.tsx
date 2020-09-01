import React, { FC, ReactNode } from 'react'
import { Block } from './Block'

type Props = {
  children: ReactNode
  title: string
  className?: string
}

export const TextBlock: FC<Props> = ({ children, title, className = '' }) => {
  return (
    <Block>
      <section className={className}>
        <h4 className="title4 tc my2">{title}</h4>
        {children}
      </section>
    </Block>
  )
}
