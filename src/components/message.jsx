import React from 'react';
import {emojify} from 'react-emojione';



function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();
  return (
    <div>
      <i><span style={{color: strToRGB(props.message.author)}}>{props.message.author}</span>
      <small>{time}</small>
      </i>
      <h4>{emojify(props.message.content)}</h4>

    </div>
  );
};

export default Message;
