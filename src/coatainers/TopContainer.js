import React from "react"
import Top from "../components/Top"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"
const TopContainer = props => <Top {...props} />
const mapStateToProps = state => ({
  user: state.login
})
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(TopContainer)
