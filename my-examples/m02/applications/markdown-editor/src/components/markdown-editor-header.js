'use strict'
import React, { PropTypes } from 'react'

const MarkdownEditorHeader = (handleSave) => (
  <header className='editor-header'>
    <button className='save-message' onClick={handleSave}>SALVAR</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
