import React, { PureComponent } from 'react';
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax';

class SearchCepContaier extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    ok: true,
    state: '',
    status: 200,
    statusText: '',
    message: '',
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    this.setState({ isFetching: true })

    const cep = e.target.cep.value;
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep})

    this.setState({ isFetching: false })
    console.log(response);
    this.setState(response)
  }

  render () {
    return(
      <SearchCep {...this.state} handleSubmit={this.handleSubmit} />
    )
  }
}

export default SearchCepContaier
