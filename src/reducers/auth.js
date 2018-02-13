const auth = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_AUTH':
      return [
        ...state,
        {
          option: action.option
        }
      ]
    case 'TOGGLE_SIGNIN':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    default:
      return state
  }
}

export default auth
