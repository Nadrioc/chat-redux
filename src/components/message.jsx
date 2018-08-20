import React from 'react';

const Message = (props) => {
  return (
    <div>
      <h2>{props.message.author}</h2>
      <h4>{props.message.content}</h4>
    </div>
  );
};

export default Message;
