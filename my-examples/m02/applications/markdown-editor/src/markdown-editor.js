import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <button onClick={() => localStorage.setItem('md', value)}>SALVAR</button>
    <textarea value={value} onChange={handleChange} autofocus />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
}



export default MarkdownEditor
