import messages from '../../data/messages';
const BASE_URL = 'https://wagon-chat.herokuapp.com';


export function setMessages() {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}

// export function setMessages(channel) {
//   const url = `${BASE_URL}/${channel}/messages`;
//   const promise = fetch(url).then(r => r.json());

//   return {
//     type: 'SET_MESSAGES',
//     payload: promise // Will be resolved by redux-promise
//   };
// }

export function handleMessageChange(input_value) {
  return {
    type: 'HANDLE_INPUT',
    payload: input_value
  }
}

export function addMessage(new_message){
  return {
    type: 'ADD_MESSAGE',
    payload: new_message
  }

}

// export function addMessage(channel, message) {
//   const url = `${BASE_URL}/${channel}/messages`;
//   const promise = fetch(url, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     message: JSON.stringify(message)
//   }).then(r => r.json());

//   return {
//     type: 'ADD_MESSAGE',
//     payload: promise // Will be resolved by redux-promise
//   };
// }

