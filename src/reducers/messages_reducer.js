const messagesReducer = (state, action) => {
  if (state === undefined) {
     return [];
   }
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload;
    case "ADD_MESSAGE":
      return Object.assign({}, state, {
        messages: state.messages.concat([action.payload])
      })
    default:
      return state;
  }
};

export default messagesReducer;
