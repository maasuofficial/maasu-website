import React, { Component } from 'react'

class Page extends Component {
  render() {
    const { children, className, ...props } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('w-100 py3 px3-nl container')

    return (
      <section {...props} className={classes.join(' ')}>
        {children}
      </section>
    )
  }
}

export default Page
