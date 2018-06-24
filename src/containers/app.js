import React from 'react'
import {Helmet} from "react-helmet";
import {BrowserRouter, browserHistory, Route, Redirect} from 'react-router-dom';

import steem from 'steem'

import {Container} from 'semantic-ui-react'

import Account from '../containers/account'
import IndexLayout from '../components/layouts/index'
import FeedLayout from '../components/layouts/feed'
import ForumLayout from '../components/layouts/forum'
// import ForumCreateLayout from '../components/layouts/forum/create'
import ForumsLayout from '../components/layouts/forums'
import RepliesLayout from '../components/layouts/replies'
import ThreadLayout from '../components/layouts/thread'
import TopicLayout from '../components/layouts/topic'
import NewsPage from '../components/layouts/newspage'


import BreadcrumbMenu from '../components/global/breadcrumb'
import FooterMenu from '../components/global/footer'
import HeaderMenu from '../components/global/menu'
import GlobalNotice from '../components/global/notice'

import './app.css'
import '../../node_modules/noty/lib/noty.css'

steem.api.setOptions({url: 'https://api.steemit.com'});

/////////////////
// use withTracker:
// import withTracker from './withTracker'
// <Route exact path="/" component={withTracker(IndexLayout)} />

const App = () => (
  <BrowserRouter history={browserHistory}>
    <div className="AppContainer">
      <Helmet>
        <title>EosTalk</title>
        <meta name="description"
              content="Blockchain based decentralized forum software powered by the Steem blockchain."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta itemprop="name" content="Eostalk Forums"/>
        <meta itemprop="description"
              content="Blockchain based decentralized forum software powered by the Steem blockchain."/>
        <meta itemprop="image"
              content="https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmckc76UaBZSicePvDG9dKwrgyS5GoZRxAnBZ8AzxtVwH8"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@eostalk"/>
        <meta name="twitter:title" content="eostalk Forums"/>
        <meta name="twitter:description"
              content="Blockchain based decentralized forum software powered by the Steem blockchain."/>
        <meta name="twitter:creator" content="@eostalk"/>
        <meta name="twitter:image:src"
              content="https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmckc76UaBZSicePvDG9dKwrgyS5GoZRxAnBZ8AzxtVwH8"/>
        <meta property="og:title" content="eostalk Forums"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="http://eostalk.io/"/>
        <meta property="og:image"
              content="https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmckc76UaBZSicePvDG9dKwrgyS5GoZRxAnBZ8AzxtVwH8"/>
        <meta property="og:description"
              content="Blockchain based decentralized forum software powered by the Steem blockchain."/>
        <meta property="og:site_name" content="eostalk"/>
      </Helmet>
      <HeaderMenu/>
      <BreadcrumbMenu/>
      <GlobalNotice/>
      <Container>
        <Route exact path="/newspage" component={NewsPage}/>

        {/* <Route exact path="/" component={IndexLayout} /> */}
        <Route exact path="/" render={(props) => <Redirect to="/forums"/>}/>
        <Route path="/@:username" component={Account}/>
        {/*<Route path="/create/forum" component={ForumCreateLayout} />*/}
        <Route path="/feed" component={FeedLayout}/>
        <Route path="/forums" component={ForumsLayout}/>
        <Route path="/forums/:group" component={IndexLayout}/>
        <Route path="/f/:id/:section?" component={ForumLayout}/>
        <Route path="/forum/:id" render={(props) => <Redirect to={`/f/${props.match.params.id}`}/>}/>
        <Route path="/replies" component={RepliesLayout}/>
        <Route path="/topic/:category" component={TopicLayout}/>
        <Route path="/:category/@:author/:permlink/:action?" component={ThreadLayout}/>
      </Container>
      <BreadcrumbMenu/>
      <FooterMenu/>
    </div>
  </BrowserRouter>
)

export default App
