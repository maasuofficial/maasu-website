import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from './types'
import { navigate } from '@reach/router'
import { closeModal, openModal } from 'store/Modals/actions'
import { Icon } from 'components/Icon'
import styled from 'styled-components'
import classnames from 'classnames'

type Props = { menu: Menu; triggerClassNames?: string; menuClassNames?: string }

const ICON_SIZE = '32px'

export const ModalMenu: FC<Props> = ({
  menu,
  triggerClassNames = '',
  menuClassNames = '',
}) => {
  const dispatch = useDispatch()

  const handleMenuOpen = () => {
    dispatch(
      openModal({
        classNames: menuClassNames,
        children: <RenderMenu menu={menu} />,
      })
    )
  }

  return (
    <div className={triggerClassNames}>
      <MenuTriggerButton
        onClick={handleMenuOpen}
        className="clearall hov-c-primary-main"
      >
        <Icon icon="bars" className="fs2" />
      </MenuTriggerButton>
    </div>
  )
}

type RenderMenuProps = {
  menu: Menu
}

const RenderMenu: FC<RenderMenuProps> = ({ menu }) => {
  const dispatch = useDispatch()

  const keys = Object.keys(menu)

  const itemClassNames = 'db fs2 c-text-light ff-averta fw700'
  const linkClassNames = 'c-text-main hov-c-primary-main'

  const handleMenuClose = () => {
    dispatch(closeModal())
  }

  const handleLinkClick = (url: string) => {
    navigate(url)
    handleMenuClose()
  }

  const renderLink = (name: string, url: string, key: number = 0) => (
    <button
      key={key}
      onClick={() => handleLinkClick(url)}
      className={classnames('clearall', itemClassNames, linkClassNames)}
    >
      {name}
    </button>
  )

  return (
    <div className="h-100">
      <div className="container pt5">
        <MenuTriggerButton onClick={handleMenuClose} className="clearall">
          <Icon icon="times" className="fs3 hov-c-primary-main" />
        </MenuTriggerButton>

        <nav aria-label="menu" className="tc py5">
          <ul className="clearall lstn">
            {keys.map((k, i) => {
              const item = menu[k]
              return typeof item === 'string' ? (
                <li key={i} className="py4">
                  {renderLink(k, item)}
                </li>
              ) : (
                <li key={i} className="py2">
                  <span className={classnames(itemClassNames)}>{k}</span>
                  <ul className="clearall">
                    {Object.keys(item).map((sk, j) =>
                      renderLink(sk, item[sk] as string, j)
                    )}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

const MenuTriggerButton = styled.button`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
`
