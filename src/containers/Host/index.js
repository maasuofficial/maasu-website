import React from 'react'
import { Page, Type } from '../../components'

class Host extends React.Component {
  componentDidMount() {
    document.title =
      'Host a Conference - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">Bid Process to Host a MAASU Conference</Type>
        <p>
          Interested in bringing a MAASU conference to your school? Here are
          some guidelines on the bid process to host the next MAASU Leadership
          Summit or Spring Conference.
        </p>

        <ol>
          <li>
            <Type variant="sub4">Bid Packet</Type>
            <p>
              All interested schools are required to create a bid packet. The
              purpose of this bid packet is to showcase why the school should
              host the conference and provide an overview of the planning
              logistics. Bid packets on average are around 20 pages long and
              need to include the following sections below:
            </p>
            <ol>
              <li>
                Title page
                <ol type="a">
                  <li>
                    school name, theme, logo, and Fall Leadership Summit or
                    Spring Conference
                  </li>
                </ol>
              </li>

              <li>Table of contents</li>
              <li>
                Information about the school
                <ol type="a">
                  <li>Background and location</li>
                  <li>APIDA presence</li>
                  <li>Land acknowledgement</li>
                </ol>
              </li>

              <li>
                Theme
                <ol type="a">
                  <li>Proposed theme, reasoning, explanation</li>
                </ol>
              </li>
              <li>Potential Dates (at least 3)</li>
              <li>
                Planning Committee
                <ol type="a">
                  <li>Advisor (staff or faculty)</li>
                  <li>
                    Chair/MAASU Liaison (co-chairs are no longer permitted)
                  </li>
                  <li>Committees</li>
                </ol>
              </li>
              <li>
                Conference Venues + Fees
                <ol type="a">
                  <li>
                    Friday Evening Programming, Registration, Opening Ceremony,
                    Workshops, Banquet
                  </li>
                  <li>Include capacity and any rental fees</li>
                </ol>
              </li>
              <li>Conference Schedule Overview</li>
              <li>
                Keynote Speaker and Entertainment
                <ol type="a">
                  <li>
                    At least 3 potential for each along with quotes for
                    honorarium/cost
                  </li>
                </ol>
              </li>
              <li>
                Workshop Ideas/Tracks
                <ol type="a">
                  <li>Topics</li>
                </ol>
              </li>
              <li>
                Proposed Budget
                <ol type="a">
                  <li>Example budget</li>
                  <li>
                    Estimated revenue for break-even, max capacity, and expected
                    attendance
                  </li>
                  <li>
                    Potential funding sources- school, local organizations,
                    corporate groups
                  </li>
                </ol>
              </li>
              <li>
                Lodging Options
                <ol type="a">
                  <li>
                    Include 3-4 options and list how far these are from the
                    conference site/banquet venue
                  </li>
                </ol>
              </li>
              <li>Nearby Restaurants</li>
              <li>
                Letter of Support
                <ol type="a">
                  <li>
                    2 letters of support on university letterhead with a
                    handwritten or digital signature
                    <ol type="i">
                      <li>
                        1 letter of support from a student affairs
                        department/office
                      </li>
                      <li>
                        1 letter of support from the planning committee advisor
                        (staff or faculty)
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>

            <br />
            <div>
              <Type variant="sub5">
                Example bid packets for Leadership Summits:
              </Type>
              <ul>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2017-LS-University-of-Missouri.pdf`}
                  >
                    2017
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2016-LS-Northwestern-University.pdf`}
                  >
                    2016
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2015-LS-Purdue-University.pdf`}
                  >
                    2015
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2014-LS-University-of-Missouri.pdf`}
                  >
                    2014
                  </a>
                </li>
              </ul>
            </div>

            <br />
            <div>
              <Type variant="sub5">
                Example bid packets for Spring Conferences:
              </Type>
              <ul>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2019-SC-University-of-Colorado-Boulder.pdf`}
                  >
                    2019
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2018-SC-The-Ohio-State-University.pdf`}
                  >
                    2018
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2015-SC-University-of-Minnesota.pdf`}
                  >
                    2015
                  </a>
                </li>
                <li>
                  <a
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${process.env.PUBLIC_URL}/assets/files/bids/Bid-2013-SC-University-of-Michigan.pdf`}
                  >
                    2013
                  </a>
                </li>
              </ul>
            </div>
            <br />
          </li>
          <li>
            <Type variant="sub4">Bid Presentation</Type>
            <p>
              Bid presentations for both the Leadership Summit and Spring
              Conference will occur during the annual MAASU Spring Conference in
              front of the MAASU General Assembly. Up to 2 representatives can
              present on behalf of each school. Representatives need to prepare
              a 15 minute PowerPoint presentation and provide 2 physical copies
              of the bid packet. After all presentations, the MAASU General
              Assembly will vote and the winning schools will be announced later
              that evening during the Spring Conference Banquet.
            </p>
            <p>
              To apply for the bidding process, please fill out the{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUWscQ_czYXQVE73fxSstNAR3SnEchK3_0nDyHFVbxRFpMxQ/viewform">
                following form
              </a>
              .
            </p>
            <p>
              In order to be considered, the following form must be filled out
              at least a week before the Spring Conference when Bid
              Presentations will take place.
            </p>
          </li>
        </ol>
        <div className="footerSpace"></div>
      </Page>
    )
  }
}

export default Host
