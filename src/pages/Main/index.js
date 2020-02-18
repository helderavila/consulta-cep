/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { Container, SubmitButton, Form, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newCep: '',
    address: [],
    loading: false,
    error: false,
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

    if (newCep === '') {
      this.setState({ error: true, loading: false });
    }

    const response = await api.get(`/${newCep}/json/`);

    this.setState({
      address: [...address, response.data],
      newCep: '',
      loading: false,
    });
  };

  handleDelete = cep => {
    const { address } = this.state;
    const array = [...address];
    const index = array.indexOf(cep);

    array.splice(index, 1);
    this.setState({ address: array });
  };

  render() {
    const { newCep, loading, address, error } = this.state;
    return (
      <Container>
        <h1>Digite um cep</h1>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar CEP"
            maxLength="9"
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
              <span>
                <strong>CEP:</strong> {a.cep}
              </span>

              <button type="button" onClick={() => this.handleDelete(a.cep)}>
                <AiOutlineDelete syze={30} color="#7159c1" />
              </button>
              <Link to={`/details/${a.cep}`}>
                <IoMdInformationCircleOutline size={14} color="#7159c1" />
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
