/* eslint-disable react/static-property-placement */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container, List, Loading } from './styles';

export default function Details({ match }) {
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAddress() {
      setLoading(false);

      const postCode = match.params.cep.replace('-', '');

      const response = await api.get(`/${postCode}/json/`);

      setAddress(response.data);
      setLoading(false);
    }

    loadAddress();
  }, []);

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

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cep: PropTypes.string,
    }),
  }).isRequired,
};
