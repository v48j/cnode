import React from "react"
import { connect } from "react-redux"
import Home from "../components/Home"
import { getTopics, changeTab } from "../actions/index"
const HomeContainer = props => <Home {...props} />
const mapStateToProps = state => ({
  topics: state.topics,
  nowtab: state.tab,
  login: state.login
})
export default connect(
  mapStateToProps,
  { getTopics, changeTab }
)(HomeContainer)
