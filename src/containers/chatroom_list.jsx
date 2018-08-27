import React, {Component} from 'react';
import Chatroom from './chatroom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ChatroomList extends Component {

  renderList(){
    return this.props.channels.map((channel) => {
      return (
        <Chatroom channel={channel} key={channel.id} />
      )
    });
  }

  render() {

    return (

      <div>
        {this.renderList()}
      </div>
    );
  }

};

function mapStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  };
}


export default connect(mapStateToProps, null)(ChatroomList);
