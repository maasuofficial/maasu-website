import React, { ReactNode } from 'react'
import { Block } from './Block'

type Props = {
  children: ReactNode
  title: string
  className?: string
}

export function TextBlock({ children, title, className = '' }: Props) {
  return (
    <Block>
      <section className={className}>
        <h4 className="title4 tc my2">{title}</h4>
        {children}
      </section>
    </Block>
  )
}
