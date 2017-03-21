import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import TwitterFeed from './containers/TwitterFeed';
import MyPage from './containers/MyPage';
import Layout from './components/Layout';
import data from './constants/data';


class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    let twitterFeed = <TwitterFeed data={data} />

    return(

      <div>
        <TwitterFeed data={data} />
        <MyPage />
      </div>
    )
  }
}


export default App;
