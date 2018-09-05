import React, { Component } from "react"
import styled from "styled-components"
class Nav extends Component {
  handleClick = tab => {
    const { nowtab } = this.props
    if (nowtab !== tab) {
      this.props.getTopics(tab)
      this.props.changeTab(tab)
    }
  }
  render() {
    const { nowtab } = this.props
    return (
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <Ul>
          <Li
            onClick={() => {
              this.handleClick("all")
            }}
            style={
              nowtab === "all"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            全部
          </Li>
          <Li
            onClick={() => {
              this.handleClick("good")
            }}
            style={
              nowtab === "good"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            精华
          </Li>
          <Li
            onClick={() => {
              this.handleClick("share")
            }}
            style={
              nowtab === "share"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            分享
          </Li>
          <Li
            onClick={() => {
              this.handleClick("ask")
            }}
            style={
              nowtab === "ask"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            问答
          </Li>
          <Li
            onClick={() => {
              this.handleClick("job")
            }}
            style={
              nowtab === "job"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            招聘
          </Li>
          <Li
            onClick={() => {
              this.handleClick("dev")
            }}
            style={
              nowtab === "dev"
                ? {
                    color: "#fff",
                    background: "#80bd01"
                  }
                : null
            }
          >
            客户端测试
          </Li>
        </Ul>
      </div>
    )
  }
}

export default Nav
const Li = styled.li`
  color: #80bd01;
  margin: 0 10px;
  cursor: pointer;
  padding: 3px 4px;
  border-radius: 3px;
  font-size: 14px;
  :hover {
    color: blue;
  }
`
const Ul = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  margin-bottom: 0;
  height: 40px;
`
