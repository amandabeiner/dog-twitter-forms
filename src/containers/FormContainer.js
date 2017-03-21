import React, { Component } from 'react';
import TextArea from '../components/TextArea'


class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweet: ''
    }

    this.handleTweetChange = this.handleTweetChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTweetChange(event){
    debugger;
    this.setState({ tweet: event.target.value })
  }

  handleFormSubmit(event) {
    debugger;
    event.preventDefault();

    let formPayload = {
      tweet: this.state.tweet
    };

    this.props.trackTweet(formPayload);
  }


  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <TextArea
          content={this.state.tweet}
          label='Tweet'
          name='tweet'
          handlerFunction={this.handleTweetChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FormContainer;
