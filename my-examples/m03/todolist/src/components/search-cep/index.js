import React from 'react';
import { connect } from 'react-redux';

import SearchCep from './search-cep'
import { fetchAddress } from '../../redux-flow/reducers/address/actions-creators';

const SearchCepContaier = ({ address, handleSubmit }) => (
  <SearchCep
    {...address}
    handleSubmit={handleSubmit} />
)

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispachtToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispachtToProps)(SearchCepContaier)
