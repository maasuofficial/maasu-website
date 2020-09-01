import React, { FC, useState } from 'react'
import { BoardMember } from 'store/Board/types'
import { Link } from '@reach/router'
import classnames from 'classnames'

type Props = {
  member: BoardMember
}

export const BoardMemberProfile: FC<Props> = ({ member }) => {
  const name = member.alias || `${member.fname} ${member.mname} ${member.lname}`

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="w-50 w-25-ns"
    >
      <Link to={`/board/${member.id}`} className="c-inh tdn">
        <div className="w-100 h-100 pa2 tc">
          <img src={member.imageUrl} alt={name} className="w-100 br" />
          <p className={classnames('ma0 fw700', { tdu: isHovered })}>{name}</p>
          <span className={classnames({ tdu: isHovered })}>
            {member.positionTitle}
          </span>
        </div>
      </Link>
    </div>
  )
}
