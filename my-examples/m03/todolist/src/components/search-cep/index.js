import React, { PureComponent } from 'react';
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax';

class SearchCepContaier extends PureComponent {
  state = {
    address: "",
    city: "",
    code: "",
    district: "",
    ok: true,
    state: "",
    status: 200,
    statusText: "",
  }

  async componentDidMount () {
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: '21521110'})
    this.setState(response)
  }

  render () {
    return(
      <SearchCep {...this.state} />
    )
  }
}

export default SearchCepContaier
