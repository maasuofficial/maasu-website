import React, { useState } from 'react'
import classnames from 'classnames'
import { BoardMember } from '../data/board'

type Props = {
  member: BoardMember
}

export function BoardMemberProfile({ member }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="w-50 w-25-ns"
    >
      <a href={`mailto:${member.email}`} className="c-inh tdn">
        <div className="w-100 h-100 pa2 tc">
          <img src={member.image} alt={member.name} className="w-100 br" />
          <p className={classnames('ma0 fw700', { tdu: isHovered })}>
            {member.name} ({member.pronouns})
          </p>
          <span className={classnames({ tdu: isHovered })}>{member.title}</span>
        </div>
      </a>
    </div>
  )
}
