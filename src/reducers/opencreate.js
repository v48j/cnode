import {
  CREATE_TEXT,
  CREATE_TEXTAREA,
  CREATE_SELECT,
  GET_TOPIC
} from "../constants/actionTypes"
const initialState = {
  text: "",
  textarea: "",
  select: "null",
  change: ""
}
const opencreate = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEXT:
      return { ...state, text: action.text }
    case CREATE_TEXTAREA:
      return { ...state, textarea: action.textarea }
    case CREATE_SELECT:
      return { ...state, select: action.select }
    case GET_TOPIC:
      return {
        text: action.topic.title,
        textarea: action.topic.content,
        select: action.topic.tab
      }
    default:
      return state
  }
}
export default opencreate
