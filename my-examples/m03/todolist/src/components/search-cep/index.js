import React, { PureComponent } from 'react';
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax';

class SearchCepContaier extends PureComponent {
  async componentDidMount () {
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: '21521110'})
    console.log(response);
  }
  render () {
    return(
      <SearchCep />
    )
  }
}

export default SearchCepContaier
