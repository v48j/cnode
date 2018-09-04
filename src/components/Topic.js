import React, { Component } from "react"
import styled from "styled-components"
import Replies from "../components/Replies"
import AddComment from "../components/AddComment"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import "moment/locale/zh-cn"
class Topic extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params
    this.props.getTopic(id, sessionStorage.token)
  }
  collect = type => {
    const { id } = this.props.match.params
    this.props.collect(id, type)
  }
  render() {
    const topic = this.props.topic
    const { like, getTopic, changeTopic } = this.props
    const { id } = this.props.match.params
    const userId = this.props.login.id
    console.log(topic)
    return topic ? (
      <div>
        <Div>
          <div>
            <H1>
              <Span>{topic.top ? "置顶" : topic.tab}</Span>
              {topic.title}
            </H1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Span2>
                  发布于
                  <Moment fromNow>{topic.create_at}</Moment>
                </Span2>
                <Span2>
                  作者
                  {topic.author.loginname}
                </Span2>
                <Span2>
                  {topic.visit_count}
                  次浏览
                </Span2>
                <Span2>
                  来自
                  {topic.tab}
                </Span2>
              </div>

              {sessionStorage.token ? (
                topic.is_collect ? (
                  <button
                    onClick={() => {
                      this.collect(false)
                    }}
                  >
                    取消收藏
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.collect(true)
                    }}
                  >
                    收藏
                  </button>
                )
              ) : null}
            </div>
            <div
              style={
                userId === this.props.topic.author_id
                  ? null
                  : { display: "none" }
              }
            >
              <Link to={`/create/${id}`}>编辑</Link>
              <span>删除</span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        </Div>
        <Replies
          replies={topic.replies}
          like={like}
          changeTopic={changeTopic}
          topicId={id}
          getTopic={getTopic}
        />
        <AddComment id={id} getTopic={getTopic} />
      </div>
    ) : (
      <div>加载中</div>
    )
  }
}

export default Topic
const Div = styled.div`
  width: 910px;
  background-color: #fff;
  padding: 10px;
  margin: 15px 0;
`
const Span = styled.span`
  color: #fff;
  background-color: #80bd01;
  font-size: 14px;
  padding: 0 3px;
  border-radius: 3px;
  margin-right: 10px;
`
const H1 = styled.h1`
  font-size: 24px;
`
const Span2 = styled.span`
  color: #838383;
  font-size: 12px;
  :before {
    content: "•";
  }
`
