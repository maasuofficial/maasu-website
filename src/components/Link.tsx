import React, { FC, ReactNode } from 'react'
import { Link as ReachLink } from '@reach/router'

type LinkProps = {
  children: ReactNode
  to: string
  className?: string
}

const newTabProps = { target: '_blank', rel: 'noreferrer noopener' }
const classNames = 'c-text-main tdu hov-c-primary-main'

export const Link: FC<LinkProps> = ({ children, to, className = '' }) => (
  <ReachLink to={to} className={`${classNames} ${className}`}>
    {children}
  </ReachLink>
)

type AProps = {
  children: ReactNode
  href: string
  className?: string
}

export const A: FC<AProps> = ({ children, href, className = '' }) => (
  <a {...newTabProps} href={href} className={`${classNames} ${className}`}>
    {children}
  </a>
)
