import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconPrefix as IPrefix,
  IconName as IName,
} from '@fortawesome/fontawesome-common-types'

// re-exporting to make it easier to find
export type IconName = IName
export type IconPrefix = IPrefix

interface Props {
  className?: string
  prefix?: IconPrefix
  icon: IconName
}

export const Icon: FC<Props> = ({ className = '', prefix = 'fas', icon }) => {
  return <FontAwesomeIcon className={className} icon={[prefix, icon]} />
}
