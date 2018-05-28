'use strict'

import React from 'react'

const Files = ({ files, handleOpenFile }) => (
  <div className='files-list-container'>
    <h2>Files</h2>
    <ul>
      {Object.keys(files).map((fileId) => (
        <li key={fileId}>
          {console.log(files)}
          <button onClick={handleOpenFile(fileId)}>{files[fileId].title}</button>
        </li>
      ))}
    </ul>
  </div>
)

export default Files
