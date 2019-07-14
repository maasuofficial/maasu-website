import React from 'react';
import { Page, Type } from '../../components';

class Awards extends React.Component {
  componentDidMount() {
    document.title = 'Awards - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='sub2'>Awards</Type>
        MAASU gives out three types of awards at the annual Spring Conference: the Charles Chang Leadership Award, the Midwestern Star Leadership Award, and the MAASU Board of Advisors Award. Winners for all awards are announced annually at the MAASU Spring Conference.

        Charles Chang Leadership Award
The Charles Chang Leadership Award was created in 1993 in honor of the MAASU’s founder Charles Chang. Each academic year, the award is presented to a student who demonstrates leadership and dedication to the Asian Pacific Islander American (APIA) community, along with a $100 scholarship and plaque.

Midwestern Star Award
Students nominated for the Midwestern Stars can be anyone who has made a great impact on their APIA community through contributions of advisement, programming, leadership, or other means that have uplifted a community higher than what has been previously.MAASU Board of 

BOA Award
The MAASU Board of Advisors (BOA) Award is an award that recognizes Asian Pacific Islander American student organizations that have accomplished greatness on their campus and in the Midwest community. The BOA Award and $100 prize is presented annually at the MAASU Spring Conference banquet to one organization or school.

      </Page>
    );
  }
}

export default Awards;