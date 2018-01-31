'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination/'
import './repos.css'

const Repos = ({ clasName, title, repos }) => (
  <div className={`repos-list ${clasName}`}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={10} />
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
