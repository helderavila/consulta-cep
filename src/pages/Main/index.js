/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { Container, SubmitButton, Form, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newCep: '',
    address: [],
    loading: false,
  };

  componentDidMount() {
    const address = localStorage.getItem('address');

    if (address) {
      this.setState({ address: JSON.parse(address) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { address } = this.state;

    if (prevState.address !== address) {
      localStorage.setItem('address', JSON.stringify(address));
    }
  }

  handleInputChange = e => {
    this.setState({ newCep: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newCep, address } = this.state;

    const response = await api.get(`/${newCep}/json/`);

    this.setState({
      address: [...address, response.data],
      newCep: '',
      loading: false,
    });
  };

  render() {
    const { newCep, loading, address } = this.state;
    return (
      <Container>
        <h1>Consulta CEP</h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar CEP"
            value={newCep}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? <FaSpinner size={14} color="#fff" /> : <p>Buscar</p>}
          </SubmitButton>
        </Form>
        <List>
          {address.map(a => (
            <li key={a.cep}>
              <span>Cep: {a.cep}</span>
              <a href="/">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
