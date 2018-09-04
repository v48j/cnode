import { CHANGE_TAB } from "../constants/actionTypes"
const tab = (state = "all", action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.tab

    default:
      return state
  }
}
export default tab
