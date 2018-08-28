import React from 'react';
import MessageList from '../containers/message_list';
import ChatroomList from '../containers/chatroom_list'
import MessageInput from '../containers/message_input'

const App = (props) => {
  return (
    <div className="app">
      <div className="chatroom-select">
        <ChatroomList selected_channel={props.match.params.channel} />
      </div>
      <div className= "message-container">
        <MessageList selected_channel={props.match.params.channel}/>
        <MessageInput selected_channel={props.match.params.channel}/>
      </div>
    </div>
  );
};

export default App;
