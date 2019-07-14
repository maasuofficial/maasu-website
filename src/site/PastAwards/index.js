import React from 'react';
import { Page } from '../../components';

class PastAwards extends React.Component {
  componentDidMount() {
    document.title = 'Past Awards Recipients - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        past award recipients:

        Past Board of Advisors Award Winners:
2007-2008: University of Missouri – Asian American Association
2009-2010: University of Minnesota – Asian-American Student Union
2010-2011: University of Missouri – Asian American Association
2011-2012: Oklahoma State University – Asian American Student Association
2012-2013: Loyola University of Chicago – Project Voice
2013-2014: Northwestern University – Asian Pacific American Coalition
2014-2015: University of Missouri – Asian American Association
2015-2016: St. Louis University – Asian American Association
2016-2017: University of Minnesota- Duluth
2018-2019: Michigan State University - Chinese Student Coalition

      </Page>
    );
  }
}

export default PastAwards;