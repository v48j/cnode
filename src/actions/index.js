import axios from "axios"
import {
  GET_TOPICS,
  CHANGE_TAB,
  SIGN_IN,
  SIGN_OUT,
  GET_TOPIC,
  CHANGE_TOPIC,
  CLICK_LIKE,
  CREATE_TEXT,
  CREATE_TEXTAREA,
  CREATE_SELECT,
  CREATE_EDIT,
  COLLECT
} from "../constants/actionTypes"
import { URI } from "../constants/url"
export const getTopics = tab => dispatch => {
  const uri = tab ? `${URI}/topics/?tab=${tab}` : `${URI}/topics`
  axios
    .get(uri)
    .then(res => {
      dispatch({
        type: GET_TOPICS,
        topics: res.data.data
      })
    })
    .catch()
}
export const changeTab = tab => ({
  type: CHANGE_TAB,
  tab: tab
})
export const signIn = token => dispatch => {
  const uri = `${URI}/accesstoken`
  axios
    .post(uri, { accesstoken: token })
    .then(res => {
      sessionStorage.token = token
      dispatch({
        type: SIGN_IN,
        user: res.data
      })
    })
    .catch(() => {
      console.log("登录失败")
    })
}
export const signOut = () => ({
  type: SIGN_OUT,
  user: ""
})
export const getTopic = (id, token) => dispatch => {
  const uri = token
    ? `${URI}/topic/${id}/?accesstoken=${sessionStorage.token}`
    : `${URI}/topic/${id}`
  axios
    .get(uri)
    .then(res => {
      //console.log(res.data.data)
      dispatch({
        type: GET_TOPIC,
        topic: res.data.data
      })
    })
    .catch(() => {
      console.log("TOPIC获取文章失败")
    })
}
export const like = (id, newComment) => dispatch => {
  const uri = `${URI}/reply/${id}/ups`
  axios
    .post(uri, { accesstoken: sessionStorage.token })
    .then(() => {
      //console.log("123")
      //fn(topicId, sessionStorage.token)
      dispatch({
        type: CLICK_LIKE,
        newComment: newComment
      })
    })
    .catch(() => {
      console.log("like失败")
    })
}

export const submit = (id, text, fn) => {
  const uri = `${URI}/topic/${id}/replies`
  axios
    .post(uri, { accesstoken: sessionStorage.token, content: text })
    .then(() => {
      console.log("评论成功")
      fn(id, sessionStorage.token)
    })
    .catch(() => {
      console.log("评论失败")
    })
}
export const changeTopic = topic => dispatch => {
  dispatch({
    type: CHANGE_TOPIC,
    topic: topic
  })
}

export const create = (newtitle, newcontent, fn, topicId) => dispatch => {
  const uri = topicId ? `${URI}/topics/update` : `${URI}/topics`
  console.log(topicId, uri, newtitle)
  axios
    .post(uri, {
      accesstoken: sessionStorage.token,
      title: newtitle,
      tab: "dev",
      content: newcontent,
      topic_id: topicId ? topicId : null
    })
    .then(res => {
      fn(`/topic/${res.data.topic_id}`)
    })
    .catch(err => {
      console.log("新建主题失败")
    })
}

export const changeCreate = (type, value) => dispatch => {
  console.log(value)
  if (type === "text") {
    dispatch({
      type: CREATE_TEXT,
      text: value
    })
  } else if (type === "textarea") {
    dispatch({
      type: CREATE_TEXTAREA,
      textarea: value
    })
  } else if (type === "select") {
    dispatch({
      type: CREATE_SELECT,
      select: value
    })
  } else if (type === "edit") {
    dispatch({
      type: CREATE_EDIT,
      edit: value
    })
  }
}

export const collect = (id, type) => dispatch => {
  const uri = `${URI}/topic_collect/collect`
  axios
    .post(uri, { accesstoken: sessionStorage.token, topic_id: id })
    .then(() => {
      //console.log("收藏成功")
      dispatch({
        type: COLLECT,
        is_collect: type
      })
    })
    .catch(() => {
      console.log("收藏失败")
    })
}
