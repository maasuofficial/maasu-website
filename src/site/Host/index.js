import React from 'react';
import { Page, Type } from '../../components';

class Host extends React.Component {
  componentDidMount() {
    document.title = 'Host a Conference - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Bid Process to Host a MAASU Conference</Type>
        <p>
          Interested in bringing a MAASU conference to your school? Here are some guidelines on the bid 
          process to host the next MAASU Leadership Summit or Spring Conference.
        </p>
        
        <ol>
          <li>
            <Type variant='sub4'>Bid Packet</Type>
            <p>
              All interested schools are required to create a bid packet. The purpose of this bid packet 
              is to showcase why the school should host the conference and provide an overview of the 
              planning logistics. Bid packets on average are around 20 pages long and need to include 
              the following sections below:
            </p>
            <ol>
              <li>
                Title page (school name, theme, logo and whether it is to host a Spring Conference 
                or a Fall Leadership Summit)
              </li>
              <li>Table of contents</li>
              <li>
                Information about the school (background, APIA presence, location)
              </li>
              <li>Theme Explaination</li>
              <li>Planning Committee</li>
              <li>Conference Facilities</li>
              <li>Lodging</li>
              <li>Restaurants</li>
              <li>Conference Schedule Overview</li>
              <li>Keynote Speaker and Entertainment</li>
              <li>Workshop Ideas</li>
              <li>Proposed Budget</li>
              <li>Estimated Revenue </li>
            </ol>

            <br />
            <div>
              <Type variant='sub5'>Example bid packets for Leadership Summits:</Type>
              <ul>
                <li>
                  <a download rel='noopener noreferrer' target='_blank' href={`${process.env.PUBLIC_URL}/assets/files/Bid-2016-LS-Northwestern-University.pdf`}>2016</a>
                </li>
                <li>
                  <a download rel='noopener noreferrer' target='_blank' href={`${process.env.PUBLIC_URL}/assets/files/Bid-2017-LS-University-of-Missouri.pdf`}>2017</a>
                </li>
              </ul>
            </div>

            <br />
            <div>
              <Type variant='sub5'>Example bid packets for Spring Conferences:</Type>
              <ul>
                <li>
                  <a download rel='noopener noreferrer' target='_blank' href={`${process.env.PUBLIC_URL}/assets/files/Bid-2018-SC-The-Ohio-State-University.pdf`}>2018</a>
                </li>
                <li>
                  <a download rel='noopener noreferrer' target='_blank' href={`${process.env.PUBLIC_URL}/assets/files/Bid-2019-SC-University-of-Colorado-Boulder.pdf`}>2019</a>
                </li>
              </ul>
            </div>
            <br />

          </li>
          <li>
            <Type variant='sub4'>Bid Presentation</Type>
            <p>
              Bid presentations for both the Leadership Summit and Spring Conference will occur during the 
              annual MAASU Spring Conference in front of the MAASU General Assembly. Up to 2 representatives 
              can present on behalf of each school. Representatives need to prepare a 15 minute PowerPoint 
              presentation and provide 2 physical copies of the bid packet. After all presentations, the 
              MAASU General Assembly will vote and the winning schools will be announced later that evening 
              during the Spring Conference Banquet.
            </p>
            <p>
              For more information on the bidding process, please fill out 
              the <a href='https://docs.google.com/forms/d/e/1FAIpQLSf_S4QMjW3hVjSVZWZxg7n1L6l4hZPzS5jJQMu92CDx7_7ikw/viewform'>following form</a>.
            </p>
            <p>
              In order to be considered, the following form must be filled out at least a week before the 
              Spring Conference when Bid Presentations will take place.
            </p>
          </li>
        </ol>
        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default Host;