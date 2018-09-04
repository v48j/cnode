import React, { Component } from "react"
import styled from "styled-components"
import { Editor } from "react-draft-wysiwyg"
import { EditorState, ContentState } from "draft-js"
import "./editor.css"
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
class Create extends Component {
  state = {
    editorState: EditorState.createWithContent(
      ContentState.createFromText(this.props.opencreate.textarea)
    )
  }
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id
      this.props.getTopic(id, sessionStorage.token)
    }
  }

  submit1 = () => {
    const { text, textarea, select, change } = this.props.opencreate
    const { create, history } = this.props
    if (text.length > 4 && textarea.length > 0 && select !== "null") {
      create(text, textarea, history.push, change)
    }
  }
  render() {
    const { text, textarea, select } = this.props.opencreate
    const { editorState } = this.state
    return (
      <Div>
        <div>
          <span>选择板块：</span>
          <select
            name=""
            id="tab"
            defaultValue={select}
            onChange={event => {
              this.changeText("select", event)
            }}
          >
            <option value="null">请选择</option>
            <option value="share">分享</option>
            <option value="ask">问答</option>
            <option value="job">招聘</option>
            <option value="dev">客户端测试</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="标题字数10字以上"
          value={text}
          onChange={event => {
            this.changeText("text", event)
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={textarea}
          onChange={event => {
            this.changeText("textarea", event)
          }}
        />
        <Button onClick={this.submit1}>提交</Button>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </Div>
    )
  }
}

export default Create
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Button = styled.button`
  width: 50px;
`
