const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT-LANGUAGE':
    return {
      ...state,
      selected: action.payload
    };
  case 'UPDATE-NAME':
    return {
      ...state,
      name: action.payload
    };
  default:
    return state
  }
}

export default reducer;
