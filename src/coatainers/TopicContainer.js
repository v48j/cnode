import React from "react"
import Topic from "../components/Topic"
import { connect } from "react-redux"
import { getTopic, like, changeTopic, changeCreate, collect } from "../actions"
const TopicContainer = props => <Topic {...props} />
const mapStateToProps = state => ({
  topic: state.topic,
  login: state.login,
  likeAction: state.likeAction
})
export default connect(
  mapStateToProps,
  { getTopic, like, changeTopic, changeCreate, collect }
)(TopicContainer)
