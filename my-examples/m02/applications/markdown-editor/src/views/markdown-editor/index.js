'use strict'

import React, { PropTypes } from 'react'
import Header from './header.js'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}



export default MarkdownEditor