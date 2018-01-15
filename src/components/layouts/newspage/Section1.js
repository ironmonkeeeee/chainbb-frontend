import React from 'react'
import PropTypes from 'prop-types';

import TimeAgo from 'react-timeago'

import { Header } from 'semantic-ui-react'

import * as GLOBAL from '../../../global';
import AccountAvatar from '../../elements/account/avatar'
import AccountLink from '../../elements/account/link';

export class Item extends React.Component {
  render() {
    let { item, itemStyle } = this.props;
    let { title, author, created, children } = item;
    let image = "https://semantic-ui.com/images/wireframe/image.png";
    try {
      image = item.json_metadata.image[0];
    } catch(e) {
    }

    if (itemStyle === "Style1") {
      return (
        <div className="item">
          <div className="image" style={{maxHeight: "100px", overflow: "hidden"}}><img src={image} /></div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              <AccountAvatar username={author} style={{minHeight: '35px', minWidth: '35px', marginBottom: 0, marginRight: '1em'}} />
              <AccountLink username={author} />
              <br/>
              <TimeAgo date={`${created}Z`} />
            </div>
            {/*<div className="description">*/}
            {/*<p><img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" className="ui wireframe image" /></p>*/}
            {/*</div>*/}
            <div className="extra">{children} comments</div>
          </div>
        </div>
      )
    } else if (itemStyle === "Style2") {
      return (
        <div className="item">
          <div className="ui tiny image"><img src={image}/></div>
          <div className="middle aligned content">{title}</div>
        </div>
      )
    } else if (itemStyle === "Style3") {
      return (
        <div className="item">
          <div className="ui small image"><img src={image} /></div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              <AccountAvatar username={author} style={{minHeight: '35px', minWidth: '35px', marginBottom: 0, marginRight: '1em'}} />
              <AccountLink username={author} />
              <br/>
              <TimeAgo date={`${created}Z`} />
            </div>
            {/*<div className="description">*/}
              {/*<p><img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" className="ui wireframe image" /></p>*/}
            {/*</div>*/}
            <div className="extra">{children} comments</div>
          </div>
        </div>
      )
    } else if (itemStyle === "Style4") {
      return (
        <div className="item">
          <div className="ui tiny image"><img src={image} /></div>
          <div className="content">
            <div className="header">{title}</div>
            {/*<div className="description">*/}
              {/*<p><img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" className="ui wireframe image" /></p>*/}
            {/*</div>*/}
            <div className="meta">
              <AccountAvatar username={author} style={{minHeight: '35px', minWidth: '35px', marginBottom: 0, marginRight: '1em'}} />
              <AccountLink username={author} />
              <br/>
              <TimeAgo date={`${created}Z`} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>Invalid itemStyle</div>
      )
    }
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  itemStyle: PropTypes.string.isRequired
}




export default class Section1 extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    feed: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    itemStyle: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loadingPosts: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    console.log("loadData1");

    this.setState({
      posts: [],
      loadingPosts: true
    });

    try {
      let url = `${ GLOBAL.REST_API }/forum/${this.props.feed}?page=1`
      const response = await fetch(url)
      if (response.ok) {
        const result = await response.json()
        // If a valid forum is found
        if (result.status === 'ok') {
          // and we have data
          if (result.data && (!result.meta || result.meta.configured !== false)) {
            // display the forum
            this.setState({
              loadingPosts: false,
              posts: result.data.slice(0, this.props.max)
            });
          }
        }
        // If this forum is not found, but we have a reservation
        if (result.status === 'not-found') {
        }
      } else {
        console.error(response.status);
      }
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h4 className="ui dividing header">{this.props.title}</h4>
        <div className="ui divided items">
          {this.state.posts.map(item => {
            return <Item key={item._id} item={item} itemStyle={this.props.itemStyle}  />
          })}
        </div>
        {/*<div className="ui centered banner test ad"></div>*/}
      </div>
    )
  }
}
