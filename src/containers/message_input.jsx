import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleMessageChange } from '../actions';
import { addMessage } from '../actions';


class MessageInput extends Component {


  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.addMessage({author: this.props.author, content: this.props.input_value });
    this.props.handleMessageChange("");
  }

  handleMessageChange = (event) => {
    this.props.handleMessageChange(event.target.value)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.input_value} onChange={this.handleMessageChange} />
        <button type="submit">Chat</button>
      </form>
    )
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { handleMessageChange: handleMessageChange,
    addMessage: addMessage },
  dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
  input_value: reduxState.input_value,
  author: reduxState.author
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageInput);

