'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header.js'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
  <section className='editor'>
    <Header {...props} handleChange={handleChange} />
    <Files files={files} handleOpenFile={handleOpenFile} />
    <textarea value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />
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
