'use strict'
import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'
import { v4 } from 'node-uuid'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor() {
    super()

    this.clearState = () => ({
      title: '',
      value: '',
      id: v4(),
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }


    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: this.state.title || 'Sem título', // Caso tenha um titulo
          // ele é passado se não entra com Sem título
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
              ...this.state.files,
              [this.state.id]: newFile
            }
          })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textearea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      // eslint-disable-next-line no-unused-vars
      const { [this.state.id] : id, ...files } = this.state.files
      this.setState({files})
      this.createNew()
    }

    this.handleCreate = () => {
      console.log('Criar novo markdown')
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textearea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title, // Quando clicarmos no botão vamos setar o title na aplicação
        value: this.state.files[fileId].content,
        id: fileId
      })
    }

  }

  componentDidMount() {
    const files = Object.keys(localStorage)
    console.log(files)
    this.setState({
      files: files.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => ({
        ...acc,
        [fileId]: localStorage.getItem(fileId)
      }), {})
    })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}

export default App
