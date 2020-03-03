export default (state, action) => {
  switch (action.type) {
    case 'set-word':
      return {
        ...state,
        word: action.payload
      }
    case 'set-speed':
      return {
        ...state,
        speed: action.payload
      }
    default:
      return state;
  }
};