import React, {Component} from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selected_channel);
  }

  // componentDidMount() {
  //   this.refresher = setInterval(this.props.setMessages(this.props.selected_channel), 5000);
  // }

  // // componentDidUpdate() {
  // //   this.list.scrollTop = this.list.scrollHeight;
  // // }

  // componentWillUnmount() {
  //   clearInterval(this.refresher);
  // }

  renderList(){

    if (this.props.messages && this.props.messages.messages && this.props.messages.messages.length >= 1){
      return this.props.messages.messages.map((message) => {
        return (
          <h2  key={message.content}>
            <Message message={message}/>
          </h2>
          );
        })
    }
  }

  render(){
    return (
      <div>
        <h2>{this.props.selected_channel}'s Channel</h2>
        <div className="app">
          <div>{this.renderList()}</div>
        </div>
      </div>
    );
  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { setMessages: setMessages },
  dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
  messages: reduxState.messages,
  // selected_channel: reduxState.selected_channel
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);




