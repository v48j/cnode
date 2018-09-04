import React, { Component } from "react"
import HomeContainer from "../coatainers/HomeContainer"
import { connect } from "react-redux"
import { getTopics } from "../actions/"
import { BrowserRouter as Router, Route } from "react-router-dom"
import TopContainer from "../coatainers/TopContainer"
import TopicContainer from "../coatainers/TopicContainer"
import styled from "styled-components"
import CreateContainer from "../coatainers/CreateContainer"
class App extends Component {
  componentDidMount = () => {
    this.props.getTopics()
  }
  render() {
    return (
      <Router>
        <div>
          <TopContainer />
          <Div>
            <Route path="/cnode/" exact component={HomeContainer} />
            <Route path="/cnode/topic/:id" component={TopicContainer} />
            <Route path="/cnode/create/:id" component={CreateContainer} />
            <Route path="/cnode/create" component={CreateContainer} />
          </Div>
        </div>
      </Router>
    )
  }
}

export default connect(
  null,
  { getTopics }
)(App)
const Div = styled.div`
  width: 1200px;
  margin: 0 auto;
`
