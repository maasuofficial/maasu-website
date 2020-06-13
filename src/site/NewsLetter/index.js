import React from 'react'
import { Page, Type } from '../../components'

class NewsLetter extends React.Component {
  componentDidMount() {
    document.title = 'Newsletter - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">Newsletter</Type>
        <p>
          Here you will find links to MAASU’s newsletters regarding past
          information about the APIA community, current projects, member
          schools, upcoming conferences, and more!
        </p>

        <table className={'directory'}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Volume</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/5-2.pdf`}
                >
                  April 2020
                </a>
              </td>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/5-1.pdf`}
                >
                  February 2020
                </a>
              </td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    'https://drive.google.com/file/d/1QcsgkoEUQhze08m9_-CEV8Nc1gbo1P38/view?fbclid=IwAR0ibJu0Quf4edxatZJPps351x3G39kAGFulOCf7QbA-AXbBXQSlFyUuN5A'
                  }
                >
                  December 2019
                </a>
              </td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    'https://drive.google.com/file/d/18f2kiGm21fl-OvrBQB-ozcrm73YNfFl6/view'
                  }
                >
                  November 2019
                </a>
              </td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    'https://drive.google.com/file/d/16TPG4UfV1cuBI6WGylQq8pP114YKe3En/view'
                  }
                >
                  October 2019
                </a>
              </td>
              <td>4</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    'https://issuu.com/aliceyu23/docs/1._maasu_september_newsletter'
                  }
                >
                  September 2019
                </a>
              </td>
              <td>4</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-3-1.pdf`}
                >
                  August 2016
                </a>
              </td>
              <td>3</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-2-1.pdf`}
                >
                  September 2015
                </a>
              </td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-3.pdf`}
                >
                  November 2014
                </a>
              </td>
              <td>1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-2.pdf`}
                >
                  October 2014
                </a>
              </td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-1.pdf`}
                >
                  September 2014
                </a>
              </td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <div className="footerSpace"></div>
      </Page>
    )
  }
}

export default NewsLetter
