const messagesInputReducer = (state = "", action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return action.payload;
    default:
      return state;
  }
};

export default messagesInputReducer;
