import messages from '../../data/messages';
const BASE_URL = 'https://wagon-chat.herokuapp.com';


export function setMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: 'SET_MESSAGES',
    payload: promise // Will be resolved by redux-promise
  };
}

export function handleMessageChange(input_value) {
  return {
    type: 'HANDLE_INPUT',
    payload: input_value
  }
}

export function selectChannel(channel) {
 return {
   type: 'SELECT_CHANNEL',
   payload: channel
 }
}


export function addMessage(channel, message) {

  console.log('addMessage');

  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).then(r => r.json());

  return {
    type: 'ADD_MESSAGE',
    payload: promise // Will be resolved by redux-promise
  };
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

