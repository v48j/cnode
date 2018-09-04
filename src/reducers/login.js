import { SIGN_IN, SIGN_OUT } from "../constants/actionTypes"
const initialState = sessionStorage.login ? sessionStorage.login : false
const login = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.user
    case SIGN_OUT:
      return action.user
    default:
      return state
  }
}
export default login
