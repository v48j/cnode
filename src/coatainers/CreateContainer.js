import React from "react"
import Create from "../components/Create"
import { connect } from "react-redux"
import { create, changeCreate, getTopic } from "../actions"
const CreateContainer = props => <Create {...props} />
const mapStateToProps = state => ({
  topic: state.topic,
  opencreate: state.opencreate
})
export default connect(
  mapStateToProps,
  { create, changeCreate, getTopic }
)(CreateContainer)
