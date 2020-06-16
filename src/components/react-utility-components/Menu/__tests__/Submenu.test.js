import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Menu from '../'

let renderSubMenu

beforeEach(() => {
  renderSubMenu = (props, children = <Menu.Link>test</Menu.Link>) =>
    render(<Menu.SubMenu {...props}>{children}</Menu.SubMenu>)
})

afterEach(cleanup)

describe('handleMouseOver', () => {
  let test, clearTimeout

  beforeEach(() => {
    clearTimeout = jest
      .spyOn(window, 'clearTimeout')
      .mockImplementation(() => {})

    test = {
      handleMouseOver: Menu.SubMenu.prototype.handleMouseOver,
      timer: null,
      setState: jest.fn(),
    }
  })

  afterEach(() => {
    clearTimeout.mockRestore()
    test.setState.mockRestore()
  })

  // routine
  it('clears the hover timer', () => {
    test.handleMouseOver()
    expect(clearTimeout).toHaveBeenCalledWith(test.timer)
  })

  /*
  // routine
  it('sets the state of open to true', () => {
    test.handleMouseOver()
    expect(test.setState).toHaveBeenCalledWith({ open: true })
  })
})

describe('handleMouseOut', () => {
  let test

  beforeEach(() => {
    test = {
      handleMouseOut: Menu.SubMenu.prototype.handleMouseOut,
      timer: null,
      setState: jest.fn(),
    }
  })

  afterEach(() => {
    test.setState.mockRestore()
  })

  // routine
  it('sets timer', () => {
    jest.useFakeTimers()

    test.handleMouseOut()
    jest.runAllTimers()

    expect(test.setState).toHaveBeenCalledWith({ open: false })
  })
})

describe('handleClick', () => {
  // routine
  it('inverts the value of open', () => {
    const test = {
      handleClick: Menu.SubMenu.prototype.handleClick,
      state: { open: false },
      setState: jest.fn(),
    }

    test.handleClick()
    expect(test.setState).toHaveBeenLastCalledWith({ open: true })

    test.state.open = true

    test.handleClick()
    expect(test.setState).toHaveBeenLastCalledWith({ open: false })
  })
})

describe('handleBlur', () => {
  let test, event

  beforeEach(() => {
    event = {
      relatedTarget: null,
    }

    test = {
      handleBlur: Menu.SubMenu.prototype.handleBlur,
      setState: jest.fn(),
      submenu: {
        contains: jest.fn(),
      },
    }
  })

  afterEach(() => {
    test.setState.mockRestore()
  })

  // routine
  it('sets open to false if no related target is present', () => {
    test.submenu.contains.mockImplementation(() => false)
    test.handleBlur(event)

    expect(test.submenu.contains).toHaveBeenCalledWith(event.relatedTarget)
    expect(test.setState).toHaveBeenCalledWith({ open: false })
  })

  // boundary
  it('does nothing if related target is present', () => {
    test.submenu.contains.mockImplementation(() => true)
    test.handleBlur(event)

    expect(test.submenu.contains).toHaveBeenCalledWith(event.relatedTarget)
    expect(test.setState).not.toHaveBeenCalled()
  })
})

describe('createSubmenu', () => {
  let test

  beforeEach(() => {
    test = {
      createSubmenu: Menu.SubMenu.prototype.createSubmenu,
      props: {},
      state: {},
    }
  })

  // routine
  it('produces an <li>', () => {
    render(test.createSubmenu())
    expect(document.querySelector('li.submenu')).not.toBeNull()
  })

  // routine
  it('adds existing classes', () => {
    const ref1 = 'test'
    const ref2 = 'hello'
    test.props.className = `${ref1} ${ref2}`
    render(test.createSubmenu())

    expect(document.querySelector(`li.submenu.${ref1}.${ref2}`)).not.toBeNull()
  })

  // routine
  it('adds open class', () => {
    test.state.open = true
    render(test.createSubmenu())

    expect(document.querySelector('li.submenu.open')).not.toBeNull()
  })

  // routine
  it('adds horizontal class', () => {
    test.props.horizontal = true
    render(test.createSubmenu())

    expect(document.querySelector('li.submenu.horizontal')).not.toBeNull()
  })

  // routine
  it('adds dropdown class', () => {
    test.props.dropdown = true
    render(test.createSubmenu())

    expect(document.querySelector('li.submenu.dropdown')).not.toBeNull()
  })

  // routine
  it('adds aria if applicable', () => {
    test.state.open = false
    test.props.dropdown = true
    render(test.createSubmenu())

    expect(document.querySelector('li[aria-haspopup=true]')).not.toBeNull()
    expect(document.querySelector('li[aria-expanded=false]')).not.toBeNull()
  })

  // routine
  it('adds aria expanded if applicable', () => {
    test.state.open = true
    test.props.dropdown = true
    render(test.createSubmenu())

    expect(document.querySelector('li[aria-haspopup=true]')).not.toBeNull()
    expect(document.querySelector('li[aria-expanded=true]')).not.toBeNull()
  })

  // routine
  it('handles mouseOver event', () => {
    test.props.dropdown = true
    test.handleMouseOver = jest.fn()

    render(test.createSubmenu())
    fireEvent.mouseOver(document.querySelector('li'))

    expect(test.handleMouseOver).toHaveBeenCalled()
    test.handleMouseOver.mockRestore()
  })

  // routine
  it('handles mouseOut event', () => {
    test.props.dropdown = true
    test.handleMouseOut = jest.fn()

    render(test.createSubmenu())
    fireEvent.mouseOut(document.querySelector('li'))

    expect(test.handleMouseOut).toHaveBeenCalled()
    test.handleMouseOut.mockRestore()
  })

  // routine
  it('handlesonClick event', () => {
    test.props.dropdown = true
    test.handleClick = jest.fn()

    render(test.createSubmenu())
    fireEvent.click(document.querySelector('li'))

    expect(test.handleClick).toHaveBeenCalled()
    test.handleClick.mockRestore()
  })

  // routine
  it('handles blur event', () => {
    test.props.dropdown = true
    test.handleBlur = jest.fn()

    render(test.createSubmenu())
    fireEvent.blur(document.querySelector('li'))

    expect(test.handleBlur).toHaveBeenCalled()
    test.handleBlur.mockRestore()
  })
})

describe('render', () => {
  let test, createSubmenu

  beforeEach(() => {
    createSubmenu = jest.fn()

    test = {
      render: Menu.SubMenu.prototype.render,
      createSubmenu,
      props: {
        children: [<li>1</li>, <li>2</li>],
        dropdown: null,
        horizontal: null,
        linkWrapper: null,
      },
    }
  })

  afterEach(() => createSubmenu.mockRestore())

  // routine
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Menu.SubMenu>
        <Menu.Link>test</Menu.Link>
      </Menu.SubMenu>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  // routine
  it('creates a submenu', () => {
    test.render()
    expect(createSubmenu).toHaveBeenCalled()
  })

  // routine
  it('produces an <li>', () => {
    renderSubMenu()
    expect(document.querySelector('li.submenu')).not.toBeNull()
  })

  // routine
  it('sets the first element as a trigger', () => {
    const ref = 'test'
    const { getByText } = renderSubMenu({}, <Menu.Link>{ref}</Menu.Link>)
    const parent = document.querySelector('li.submenu')

    expect(parent.children.length).toEqual(2)
    expect(parent.firstChild).toEqual(getByText(ref))
  })

  // routine
  it('sets the rest of the elements as ul elements', () => {
    renderSubMenu({}, <Menu.Link>test</Menu.Link>)

    const parent = document.querySelector('li.submenu')
    const ul = document.querySelector('ul')

    expect(parent.lastChild).toEqual(ul)
  })
  */
})
