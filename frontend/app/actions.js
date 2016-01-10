export const updateLanguage = (index) => {
  return {
    type: 'UPDATE-LANGUAGE',
    payload: index
  }
}

export const updateName = (name) => {
  return {
    type: 'UPDATE-NAME',
    payload: name
  }
}
