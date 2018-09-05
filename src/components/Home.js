import React, { Component } from "react"
import Topics from "./Topics"
import Nav from "./Nav"
import styled from "styled-components"

class Home extends Component {
  render() {
    const { topics, getTopics, changeTab, nowtab } = this.props

    return (
      <Div>
        <Nav getTopics={getTopics} changeTab={changeTab} nowtab={nowtab} />
        <Topics topics={topics} getTopics={getTopics} nowtab={nowtab} />
      </Div>
    )
  }
}

export default Home
const Div = styled.div`
  width: 1200px;
  margin: 0 auto;
`
