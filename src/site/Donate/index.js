import React from 'react';
import { Page, Type } from '../../components';

class Donate extends React.Component {
  componentDidMount() {
    document.title = 'Donate - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Donate</Type>

        <p>
          MAASU is a 501c3 nonprofit student run organization. 
          We rely on community support to continue to aide, educate 
          and connect students across midwest campuses in leadership 
          development and Asian American advocacy. 
        </p>

        <p>
          It is with your financial support that we are able to provide 
          students with resources and events that connect our shared identity. 
        </p>

        <p>
          MAASU believes in empowering students and cultivating strong leaders 
          within our local communities. Your donation would ensure the continuation 
          of these programs, such as the Leadership Summit and Spring Conference. 
        </p>

        <p>
          Please join us in supporting young Asian American Student Leaders 
          by making a tax deductible deduction today. 
        </p>

        <p>
          If you have any questions, please reach out to the <a href='mailto:directorscouncil@maasu.org'>Directorscouncil@maasu.org</a>.
        </p>

        <p>
          Engagement of young people is more important than ever, and we 
          hope you join us in cultivating the next generation of leaders.
        </p>

        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default Donate;
