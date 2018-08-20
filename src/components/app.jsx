import React from 'react';
import MessageList from '../containers/message_list';
import Chatroom from '../containers/chatroom'
import MessageInput from '../containers/message_input'

const App = () => {
  return (
    <div className="app">
      <div className="chatroom-select">
        <Chatroom />
      </div>
      <div className= "message-container">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default App;
