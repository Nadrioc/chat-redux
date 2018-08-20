import React, {Component} from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentDidMount() {
    this.props.setMessages("Sam");
  }

  renderList(){
    if (this.props.messages.length >= 1){
      return this.props.messages.map((message) => {
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
      <div className="app">
        <div>{this.renderList()}</div>
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
  messages: reduxState.messages
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);




