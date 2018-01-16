import React from 'react';
import { Grid } from 'semantic-ui-react';
import Iframe from 'react-iframe';
import Section1 from './newspage/Section1';

export default class NewsPage extends React.Component {

  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Section1 title="General" feed="eos-general" itemStyle="Style1" max={3} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <Section1 title="Announcements" feed="eos-announcements" itemStyle="Style2" max={4} />
            {/*<div className="ui divider"></div>*/}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={4} computer={4}>
            {/*<div className="ui small vertical rectangle test ad" data-text="Small Rectangle"></div>*/}
            <Iframe url="https://discordapp.com/widget?id=335703116689440770&theme=light" position="relative" width="100%" height="425px" />
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
            {/*<Section1 title="EOS Meetups" feed="eos-meetups" itemStyle="Style2" max={4} />*/}
            <Iframe url="/widget_price.html" position="relative" width="100%" height="220px" />
            <Iframe url="https://tgwidget.com/widget/count/?id=5a5df73183ba8879648b4567" position="relative" width="100%" height="50px" />
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
