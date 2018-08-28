import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectChannel } from '../actions';
import { setMessages } from '../actions';
import { Link } from 'react-router-dom';
class Chatroom extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected_channel !== this.props.selected_channel) {
      this.props.setMessages(nextProps.selected_channel);
    }
  }

  // handleClick = () =>{
  //   this.props.selectChannel(this.props.channel)
  //   console.log(this.props.selected_channel)
  //   // this.props.setMessages(this.props.selected_channel);
  // }
  //onClick={this.handleClick}

  render() {

  console.log(this.props)

  const {selected_channel, channel} = this.props

  let styler = "channel"
  if (channel.name === selected_channel) {
    styler += " selected"
  }
   return (

    <div className={styler} >
      <h2>
        <Link to={`/${channel.name}`}>
          #{channel.name}
        </Link>
      </h2>
    </div>
    )
 }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
    );
}

function mapStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
