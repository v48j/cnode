import topics from "./topics"
import tab from "./tab"
import login from "./login"
import topic from "./topic"
import opencreate from "./opencreate"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  topics,
  tab,
  login,
  topic,
  opencreate
})
export default rootReducer
