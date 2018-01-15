import React from 'react';

import { Grid } from 'semantic-ui-react';

import Section1 from './newspage/Section1';

export default class NewsPage extends React.Component {

  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Section1 title="General" feed="eos-general" itemStyle="Style1" max={3} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Section1 title="Announcements" feed="eos-announcements" itemStyle="Style2" max={4} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={3} computer={3}>
            <div className="ui small vertical rectangle test ad" data-text="Small Rectangle"></div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Section1 title="Community Projects" feed="eos-projects" itemStyle="Style3" max={3} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Section1 title="Developers" feed="eos-dev" itemStyle="Style3" max={3} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <Section1 title="EOS Meetups" feed="eos-meetups" itemStyle="Style2" max={4} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Section1 title="Support" feed="eos-help" itemStyle="Style4" max={3} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Section1 title="EOS governance" feed="eos-gov" itemStyle="Style4" max={3} />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}
