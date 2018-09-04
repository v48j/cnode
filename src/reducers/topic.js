import {
  GET_TOPIC,
  CHANGE_TOPIC,
  CLICK_LIKE,
  COLLECT
} from "../constants/actionTypes"
const initialState = null
const topic = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC:
      return action.topic
    case CHANGE_TOPIC:
      return action.topic
    case CLICK_LIKE:
      return { ...state, replies: action.newComment }
    case COLLECT:
      return { ...state, is_collect: action.is_collect }
    default:
      return state
  }
}
export default topic
