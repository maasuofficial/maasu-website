import React from 'react';
import { Page, Type } from '../../components';

class WhereAreYouFrom extends React.Component {
  render() {
    return (
      <Page>
        {/* TODO logo */}
        <Type variant='sub2'>The #WhereAreYouFrom Project</Type>
        <p>
          MAASU strives to tell the story of Asian Pacific Islander Americans (APIAs)
          in the Midwest through the #Whereareyoufrom Project. The project’s main goal is
          to combat the question "Where are you from?" that many APIs are are constantly asked.
          This question identifies APIs as foreigners in their own home, which makes them perpetual
          foreigners, when they are not. #Whereareyoufrom collects the stories of individual across
          the Midwest through videos, audio and written stories. The stories we have collected range
          from working professionals to students, family and friends who grew up in the Midwest.
        </p>
        <p>
          You can listen to some of the stories on MAASU’s <a href='https://archive.storycorps.org/user/maasu/'>Storycorps page</a>,
          where we record and house all audio stories. If you are interested in reading stories, you can head
          to our facebook page or check out our monthly newsletters and read the stories there. If you are
          interested in sharing your written story, you can do that <a href='http://goo.gl/forms/T9eaiPlS4x'>here</a>.
        </p>
        <p>For more information on this project, you can contact our Advocacy Co-Chair: advocacy2@maasu.org.</p>
        <p>Fall 2015 MAASU Kick-Off Video</p>
        <iframe title='maasu kick-off video' width="640" height="360" src="https://www.youtube.com/embed/3ndhclLwEV4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </Page>
    );
  }
}

export default WhereAreYouFrom;