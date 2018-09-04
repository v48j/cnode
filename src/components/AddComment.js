import React, { Component } from "react"
import { submit } from "../actions"
import { Editor } from "react-draft-wysiwyg"
import { EditorState, convertToRaw } from "draft-js"
import draftToMarkdown from "draftjs-to-markdown"
import "./editor.css"
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
class AddComment extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  submit = () => {
    const { editorState } = this.state
    const { id, getTopic } = this.props
    const text =
      editorState &&
      draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    submit(id, text, getTopic)
    this.setState({
      editorState: EditorState.createEmpty()
    })
  }
  render() {
    const { editorState } = this.state
    return (
      <div>
        <button onClick={this.submit}>回复</button>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}

export default AddComment
