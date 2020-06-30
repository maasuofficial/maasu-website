import React from 'react'
import { Page, Type } from '../../components'
import { APP_NAME_LONG, DONATE_MAA_URL } from 'constants/strings'

class Alumni extends React.Component {
  componentDidMount() {
    document.title = 'Alumni - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          <div className="tc">
            <img
              className="w-50 w-100-s px6 pt6"
              src={`${process.env.PUBLIC_URL}/assets/branding/light/text.svg`}
              alt={APP_NAME_LONG}
            />
            <Type cap variant="sub2">
              <span className="fw700">Alumni Association</span>
            </Type>
          </div>
        </Page>
        <Page>
          <Type variant="h4">Purpose</Type>
          <p>
            The MAASU Alumni Association (MAA) is a group for all MAASU alumni.
            MAA’s purpose is to continue building and sustaining lifelong
            relationships between MAASU and its alumni through the following
            ways:
          </p>
          <ul>
            <li>Providing social and career networking for alumni</li>
            <li>Engaging students as future alumni</li>
            <li>Providing alumni opportunities to reconnect with MAASU</li>
            <li>Recognize alumni for various accomplishments and service</li>
            <li>Student Travel Scholarships to attend MAASU Conferences</li>
          </ul>
        </Page>
        <Page>
          <Type variant="h2">MAA Membership</Type>
          <p>
            To become a MAA member, there is a one-time membership fee of $30.
            MAA members will then be mailed a MAASU Alumni Association wine
            glass. If you are interested in becoming a member of the MAASU
            Alumni Association, please follow these steps:
          </p>
          <ol>
            <li>
              Fill out the MAASU Alumni Directory Form{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScepfU3sMqFNlCWTBBnV9ig2vTk6Z_E9Ar9MxmK8DnHKU30Gw/viewform?c=0&w=1">
                here
              </a>
              .
            </li>
            {/* <li>Provide a one-time membership payment of $30.00 USD via PayPal below.</li> */}
            <li>
              Provide a one-time membership payment of $30.00 USD via PayPal
              below.
            </li>
            <li>
              After completing steps 1 and 2, access to the Alumni Directory
              will be granted and a MAA wine glass will be mailed to you.
            </li>
          </ol>
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="NXTRNY49H77YQ"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
          <Type variant="h2">Donation</Type>
          <p>
            If you would like to support the MAASU Alumni Association, consider
            donating <a href={DONATE_MAA_URL}>here</a>.
          </p>
        </Page>
      </React.Fragment>
    )
  }
}

export default Alumni
