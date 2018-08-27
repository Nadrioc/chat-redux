import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class Chatroom extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected_channel !== this.props.selected_channel) {
      this.props.setMessages(nextProps.selected_channel.name);
    }
  }

  handleClick = () =>{
    this.props.selectChannel(this.props.channel)
    console.log(this.props.selected_channel.name)
    // this.props.setMessages(this.props.selected_channel.name);
  }

  render() {

  const {selected_channel, channel} = this.props

  let styler = "channel"
  if (channel === selected_channel) {
    styler += " selected"
  }

   return (
    <div className={styler} onClick={this.handleClick}>
        <h2>{channel.name}</h2>
    </div>
    )
 }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel, setMessages: setMessages },
    dispatch
    );
}

function mapStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selected_channel: reduxState.selected_channel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
