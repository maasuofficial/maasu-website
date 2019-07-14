import React from 'react';
import { Page, Type } from '../../components';

class Board extends React.Component {
  componentDidMount() {
    document.title = 'Executive Board - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          TODO board heirarchy
        </Page>
        <Page>
          <Type variant='h5'>Executive Coordinating Committee (ECC)</Type>
          <p>
            Applications for the 2019-2020 academic year will be open in Spring 2019.
          </p>
          <Type variant='h5'>Directors Council (DC)</Type>
          <p>
            Applications for the Directors Council are currently closed. The next application cycle will be Spring 2021.
          </p>
          <Type variant='h5'>Board of Advisors (BOA)</Type>
          <p>
            There is a position opening on the MAASU Board of Advisors (BOA). Please email completed application to execdirector@maasu.org.
          </p>
          <p>
            <a href='https://drive.google.com/file/d/1dZYGFPyarszs-vJ-fhcehS41drz7B3ig/view?usp=sharing'>Application</a>
          </p>
        </Page>
      </React.Fragment>
    );
  }
}

export default Board;