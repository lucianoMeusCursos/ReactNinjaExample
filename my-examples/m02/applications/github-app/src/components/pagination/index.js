'use strict'

import React from 'react'
import pagination from 'utils/pagination'

const Pagination = ({total, activePage}) => (
  <div>
    <ul>
    {pagination({ total, activePage }).map((page, index) => (
        <li key={index}>
          <a href="#">{page}</a>
        </li>
    ))}
    </ul>
  </div>
)

export default Pagination
