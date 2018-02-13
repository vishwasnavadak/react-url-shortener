export const changeAuth = option => {
  return {
    type: 'CHANGE_AUTH',
    option
  }
}

export const toggleSignin = id => {
  return {
    type: 'TOGGLE_SIGNIN',
    id
  }
}
