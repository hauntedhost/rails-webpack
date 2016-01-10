export const selectLanguage = (index) => {
  return {
    type: 'SELECT-LANGUAGE',
    payload: index
  }
}

export const updateName = (name) => {
  return {
    type: 'UPDATE-NAME',
    payload: name
  }
}
