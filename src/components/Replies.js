import React, { Component } from "react"
import styled from "styled-components"
import "../iconfont/iconfont.css"
import "./aa.css"
class Replies extends Component {
  clickLike = id => {
    if (sessionStorage.token) {
      const { like, replies } = this.props
      const newComment = replies.map(ele => {
        if (ele.id === id) {
          ele.is_uped = !ele.is_uped
          if (ele.is_uped) {
            ele.ups.length++
          } else {
            ele.ups.length--
          }
        }
        return ele
      })
      like(id, newComment)
    } else {
      alert("请先登录，登陆后即可点赞")
    }
  }
  render() {
    const { replies } = this.props
    const repliesList = replies.map(
      ({ id, content, author, ups, is_uped }, num) => (
        <Div key={id}>
          <Img src={author.avatar_url} alt="" />
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span style={{ marginRight: "5px" }}>{author.loginname}</span>
                <span>{num + 1}楼</span>
              </div>
              <div style={{ color: "gray" }}>
                <I
                  onClick={() => {
                    this.clickLike(id)
                  }}
                  style={is_uped ? { color: "#000", fontWeight: "bold" } : null}
                  className="iconfont icon-good"
                />
                <span style={{ margin: "0 10px" }}>{ups.length}</span>
                <I
                  onClick={this.like}
                  style={
                    sessionStorage.token
                      ? { cursor: "pointer" }
                      : { display: "none" }
                  }
                  className="iconfont icon-huifu"
                />
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </Div>
      )
    )
    return <div>{repliesList}</div>
  }
}

export default Replies
const Div = styled.div`
  background-color: #fff;
  width: 910px;
  border-top: 1px solid #f0f0f0;
  padding: 10px;
  display: flex;
  p {
    margin: 0;
  }
`
const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 3px;
  margin-right: 10px;
`
const I = styled.i`
  cursor: pointer;
`
