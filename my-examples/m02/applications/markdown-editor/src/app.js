'use strict'
import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'
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

    this.state = {
      value: '',
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem('md', this.state.value)
        this.setState({ isSaving: false })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem('md')
      this.setState({ value: ''})
    }

    this.handleCreate = () => {
      console.log('Criar novo markdown')
      this.setState({ value: '' })
      this.textearea.focus()
    }

    this.textareaRef = (node) => {
      this.textearea = node
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
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
      />
    )
  }
}

export default App
