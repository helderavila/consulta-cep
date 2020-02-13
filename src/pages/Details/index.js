import React, { Component } from 'react';

import api from '../../services/api';

import { Container, List, Loading } from './styles';

export default class Details extends Component {
  state = {
    address: {},
    loading: false,
  };

  async componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });

    const postCode = match.params.cep.replace('-', '');

    const response = await api.get(`/${postCode}/json/`);

    this.setState({ address: response.data, loading: false });

    console.log(this.state.address);
  }

  render() {
    const { address, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <h1>Detalhes</h1>
        <List>
          <li>
            <strong>CEP: </strong>
            {address.cep}
          </li>
          <li>
            <strong>Logradouro: </strong>
            {address.logradouro}
          </li>
          <li>
            <strong>Complemento: </strong>
            {address.complemento}
          </li>
          <li>
            <strong>Bairro: </strong>
            {address.bairro}
          </li>
          <li>
            <strong>Localidade: </strong>
            {address.localidade}
          </li>
          <li>
            <strong>uf: </strong>
            {address.uf}
          </li>
        </List>
      </Container>
    );
  }
}
