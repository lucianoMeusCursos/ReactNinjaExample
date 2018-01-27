'use strict'

import React from 'react'
import pagination from 'utils/pagination'
import Page from './page'

 // criando o componente página
/* Criamos o componente page para separarmos melhor a lógica de não mostrar os links quando tivermos ... */

const Pagination = ({total, activePage}) => (
  <div>
    <ul>
    {pagination({ total, activePage }).map((page, index) => (
        <li key={index}>

          <Page page={page}/>
        </li>
    ))}
    </ul>
  </div>
)

export default Pagination
