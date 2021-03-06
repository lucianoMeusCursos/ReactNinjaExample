import React from 'react';
import { connect } from 'react-redux';
import { fetchAddress } from '../../redux-flow/reducers/address/actions-creators';

export const SearchCep = ({
  address,
  city,
  code,
  district,
  ok,
  state,
  status,
  statusText,
  message,
  isFetching,
  handleSubmit

}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="cep"/>
      <button type="submit" disabled={isFetching}>
       {isFetching ? 'Buscando...' : 'Buscar endereço' }
      </button>
    </form>

    {status !== 200 && <div>{message}</div>}

    {status === 200 && (
      <table>
        <thead>
          <tr>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
)

const mapStateToProps = (state) => state.address

const mapDispachtToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispachtToProps)(SearchCep)
