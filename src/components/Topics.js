import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import "moment/locale/zh-cn"
class Topics extends Component {
  render() {
    const { topics } = this.props
    const topicList =
      topics.length === 0 ? (
        <div>加载中</div>
      ) : (
        <Ul>
          {topics.map(
            ({
              id,
              title,
              author,
              reply_count,
              visit_count,
              tab,
              top,
              last_reply_at
            }) => (
              <Li key={id}>
                <Div>
                  <Img src={author.avatar_url} alt="" />
                  <SpanAll>
                    <SpanReply>{reply_count}</SpanReply>/
                    <SpanVisit>{visit_count}</SpanVisit>
                  </SpanAll>
                  <SpanTab
                    style={
                      top ? { color: "#fff", backgroundColor: "#80bd01" } : null
                    }
                  >
                    {top
                      ? "置顶"
                      : tab === "share"
                        ? "分享"
                        : tab === "good"
                          ? "精华"
                          : tab === "job"
                            ? "招聘"
                            : "问答"}
                  </SpanTab>
                  <Link to={`/topic/${id}`}>{title}</Link>
                </Div>
                <Div>
                  <Moment locale="zh-cn" fromNow>
                    {last_reply_at}
                  </Moment>
                </Div>
              </Li>
            )
          )}
        </Ul>
      )
    return <div>{topicList}</div>
  }
}

export default Topics
const Li = styled.li`
  border-top: 1px solid #ccc;
  display: flex;
  padding: 10px 0px;
  background-color: #fff;
  justify-content: space-between;
`
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 0 10px;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  max-width: 700px;
`
const SpanAll = styled.span`
  font-size: 14px;
  margin-right: 10px;
`
const SpanReply = styled.span`
  color: #9e78c0;
`
const SpanVisit = styled.span`
  color: #b4b4b4;
`
const SpanTab = styled.span`
  color: #999;
  margin-right: 10px;
  font-size: 12px;
  background-color: #e5e5e5;
  padding: 0 3px;
  border-radius: 2px;
  height: 18px;
  weight: 30px;
  flex-shrink: 0;
`
