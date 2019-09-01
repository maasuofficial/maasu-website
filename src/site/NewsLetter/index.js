import React from 'react';
import { Page, Type } from '../../components';
import modules from './Newsletter.module.scss';

class NewsLetter extends React.Component {
  componentDidMount() {
    document.title = 'Newsletter - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Newsletter</Type>
        <p>
          Here you will find links to MAASU’s newsletters regarding past information about the APIA 
          community, current projects, member schools, upcoming conferences, and more!
        </p>

        <table className={`${modules.directory}`}>
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
                <a target='_blank' rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-3-1.pdf`}
                >August 2016</a>
              </td>
              <td>3</td><td>1</td>
            </tr>
            <tr>
              <td>
                <a target='_blank' rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-2-1.pdf`}
                >September 2015</a>
              </td>
              <td>2</td><td>1</td>
            </tr>
            <tr>
              <td>
                <a target='_blank' rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-3.pdf`}
                >November 2014</a>
              </td>
              <td>1</td><td>3</td>
            </tr>
            <tr>
              <td>
                <a target='_blank' rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-2.pdf`}
                >October 2014</a>
              </td>
              <td>1</td><td>2</td>
            </tr>
            <tr>
              <td>
                <a target='_blank' rel='noopener noreferrer'
                  href={`${process.env.PUBLIC_URL}/assets/files/newsletters/Newsletter-1-1.pdf`}
                >September 2014</a>
              </td>
              <td>1</td><td>1</td>
            </tr>
          </tbody>
        </table>
        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default NewsLetter;