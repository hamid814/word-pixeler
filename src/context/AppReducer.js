export default (state, action) => {
  switch (action.type) {
    case 'get-techs':
      return {
        ...state,
        techs: action.payload
      }
    default:
      return state;
  }
};