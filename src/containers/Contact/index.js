import React from 'react'
import { Cell, Grid, Page, Type } from '../../components'
import querystring from 'querystring'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import {
  APP_NAME_LONG,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from 'constants/strings'

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
      <Page className={'contact-contact'}>
        <Type variant="h2">Contact Us</Type>

        <div className={'content-contact'}>
          <div className={'linkContainer-contact'}>
            <Grid className={'linkGrid-contact disp-in-flex'}>
              <Cell auto>
                <a href={SOCIAL_FACEBOOK}>
                  <FaFacebookF />
                </a>
              </Cell>
              {/* <Cell auto> */}
              {/*   <a href="https://twitter.com/MAASUOfficial"> */}
              {/*     <FaTwitter /> */}
              {/*   </a> */}
              {/* </Cell> */}
              <Cell auto>
                <a href={SOCIAL_INSTAGRAM}>
                  <FaInstagram />
                </a>
              </Cell>
            </Grid>
          </div>

          <p>
            Any questions? Send us a message and we'll get back to you as soon
            as possible!
          </p>

          <form className={'contactForm-contact'} onSubmit={this.handleSubmit}>
            <input
              type="text"
              required
              name="name"
              placeholder="First and last name"
            />
            <input type="email" required name="email" placeholder="Email" />
            <textarea required name="message" placeholder="Message"></textarea>
            <div
              className={`contactResponse-contact ${
                this.state.submission
                  ? [`contact-${this.state.submission}-contact`]
                  : ''
              }`}
            >
              <span>{this.state.submissionMessage}</span>
            </div>
            <button type="submit">Submit</button>
          </form>

          <footer>
            <br />
            <span>
              &copy;MAASU 2020. For additional information or questions
              regarding the website please contact{' '}
              <a className="mail" href="MAILTO:technet@maasu.org">
                technet@maasu.org
              </a>
              .
            </span>
            <br />
            <img
              className={'logo-contact'}
              src={`${process.env.PUBLIC_URL}/assets/branding/light/logo-text.svg`}
              alt={APP_NAME_LONG}
            />
          </footer>
        </div>
      </Page>
    )
  }
}

export default Contact
