'use strict'

import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, isSaving, handleRemove, handleChange, getMarkup }) => (
  <section className='editor'>
    <Header isSaving={isSaving} handleRemove={handleRemove} />
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}



export default MarkdownEditor
