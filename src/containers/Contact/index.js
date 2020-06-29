import React from 'react'
import { Type } from '../../components'
import querystring from 'querystring'
import fetch from 'isomorphic-fetch'
import { FooterComponent } from 'components/FooterComponent'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      submission: null,
      submissionMessage: '',
    }
  }

  componentDidMount() {
    document.title = 'Contact - The Midwest Asian American Students Union'
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = e.target

    const response = {
      'entry.1059489069': 'ecc@maasu.org',
      'entry.366340186': name.value,
      'entry.1066764004': email.value,
      'entry.1137712670': message.value,
    }

    const formData = querystring.stringify(response)

    const url = `https://docs.google.com/forms/d/e/1FAIpQLScR8VrdLO9dHOs_PIabASBPkSIjinUQklxh_rncEDygrikeNQ/formResponse?${formData}`

    const options = {
      method: 'POST',
      mode: 'no-cors',
    }

    try {
      await fetch(url, options)
      this.setState({
        submission: 'success',
        submissionMessage: 'Your message was sent.',
      })
    } catch (e) {
      this.setState({
        submission: 'error',
        submissionMessage: 'Unable to send message: ' + e,
      })
    }
  }

  render() {
    return (
      <div className="container pt6">
        <Type variant="h2">
          <span className="tc db">Contact Us</span>
        </Type>

        <div>
          <p className="tc">
            Any questions? Send us a message and we'll get back to you as soon
            as possible!
          </p>

          <form className="mxa w-100-s" onSubmit={this.handleSubmit}>
            <input
              className="w-100 fs0 my3 pa3 ffhind bgc-bg-main br2"
              type="text"
              required
              name="name"
              placeholder="First and last name"
            />
            <input
              className="w-100 fs0 my3 pa3 ffhind bgc-bg-main br2"
              type="email"
              required
              name="email"
              placeholder="Email"
            />
            <textarea
              className="w-100 fs0 my3 pa3 ffhind bgc-bg-main br2"
              required
              name="message"
              placeholder="Message"
            ></textarea>
            {this.state.submission ? (
              <div>
                <span>{this.state.submissionMessage}</span>
              </div>
            ) : (
              <button
                className="w-100 fs0 ffhind my3 fw700 pa3 tr2 hov-fgc-text-main fgc-bg-main hov-bgc-bg-main bgc-text-main br2"
                type="submit"
              >
                Submit
              </button>
            )}
          </form>

          <FooterComponent />
        </div>
      </div>
    )
  }
}

export default Contact
