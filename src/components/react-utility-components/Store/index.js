import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.dispatch = this.dispatch.bind(this)
    this.state = { ...this.props.initialStore }
  }

  dispatch(action) {
    return this.setState({
      ...this.state,
      ...action(this.state) /* dispatch: this.dispatch */,
    })
  }

  render() {
    const { children } = this.props
    const { state, dispatch } = this

    const value = { store: { ...state, dispatch } }

    return <Context.Provider value={value}>{children}</Context.Provider>
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  initialStore: PropTypes.object,
}

Provider.defaultProps = {
  initialStore: {},
}

const Consumer = (Component) => {
  return (props) => (
    <Context.Consumer>
      {(context) => (
        <Component {...props} store={context ? context.store : {}} />
      )}
    </Context.Consumer>
  )
}

Consumer.propTypes = {
  Component: PropTypes.element.isRequired,
}

export { Provider, Consumer }
