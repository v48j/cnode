import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

class Top extends Component {
  state = {
    token: "fcc2c790-e4af-4bad-b6b7-565822f5eb61"
  }
  signIn = () => {
    const { token } = this.state
    this.props.signIn(token)
  }
  signOut = () => {
    this.props.signOut()
    sessionStorage.removeItem("token")
  }
  changeToken = event => {
    this.setState({
      token: event.target.value
    })
  }
  componentDidMount = () => {
    const token = sessionStorage.token
    if (token) {
      this.props.signIn(token)
    }
  }
  render() {
    const { token } = this.state
    const { user } = this.props
    return (
      <Div>
        <Divt>
          <Link to="/cnode/">
            <Img
              src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
              alt=""
            />
          </Link>
          <div style={user ? { display: "none" } : null}>
            <input type="text" value={token} onChange={this.changeToken} />
            <Link to="/" onClick={this.signIn}>
              <Span>登录</Span>
            </Link>
          </div>
          <Div3 style={user ? null : { display: "none" }}>
            <Link to="/cnode/create">
              <button>发布话题</button>
            </Link>
            <span style={{ color: "#ccc", fontSize: "14px" }}>
              欢迎
              {user.loginname}
            </span>
            <Img2 src={user.avatar_url} alt="" />
            <Link to="/cnode/" onClick={this.signOut}>
              <Span>退出</Span>
            </Link>
          </Div3>
        </Divt>
      </Div>
    )
  }
}

export default Top
const Div = styled.div`
  background-color: #444;
`
const Img = styled.img`
  width: 120px;
  height: 28px;
`
const Divt = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`
const Span = styled.span`
  color: #ccc;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #eee;
  }
`
const Img2 = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px;
`
const Div3 = styled.div`
  display: flex;
  align-items: center;
`
