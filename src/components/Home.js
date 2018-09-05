import React, { Component } from "react"
import Topics from "./Topics"
import Nav from "./Nav"
import styled from "styled-components"

class Home extends Component {
  render() {
    const { topics, getTopics, changeTab, nowtab, login } = this.props
    console.log(login.avatar_url)
    return (
      <div style={{ display: "flex", width: "1200px", margin: "0 auto" }}>
        <Div>
          <Nav getTopics={getTopics} changeTab={changeTab} nowtab={nowtab} />
          <Topics topics={topics} getTopics={getTopics} nowtab={nowtab} />
        </Div>
        <Div2>
          <Divtitle>
            <span>人员信息</span>
          </Divtitle>
          <Divinner>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Img src={login.avatar_url} alt="" />
              <span>{login.loginname}</span>
            </div>
          </Divinner>
        </Div2>
      </div>
    )
  }
}

export default Home
const Div = styled.div`
  width: 70%;
`
const Div2 = styled.div`
  width: 290px;
  height: 100px;
  background-color: #fff;
  margin: 16px 0 0 16px;
`
const Divtitle = styled.div`
  height: 40px;
  padding: 10px;
  background-color: #f6f6f6;
  font-size: 14px;
`
const Divinner = styled.div`
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
`
const Img = styled.img`
  width: 48px;
  height: 48px;
`
