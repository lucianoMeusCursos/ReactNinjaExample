'use strict'

import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, handleChange, handleSave, getMarkup }) => (
  <section className='editor'>
    <Header onSave={handleSave} />
    <textarea value={value} onChange={handleChange} autofocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
}



export default MarkdownEditor
