/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FaSpinner } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Container, SubmitButton, List } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  cep: Yup.string()
    .min(8, 'O cep deve conter 8 numeros')
    .required('Digite o cep corretamente'),
});

export default function Main() {
  const [newCep, setNewCep] = useState('');
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAddress() {
      const addressStorage = await localStorage.getItem('address');

      if (addressStorage) {
        setAddress(JSON.parse(addressStorage));
      }
    }
    loadAddress();
  }, []);

  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(address));
  }, [address]);

  function handleInputChange(e) {
    setNewCep(e.target.value);
  }

  async function handleSubmit() {
    setLoading(true);
    const response = await api.get(`/${newCep}/json/`);

    if (response.data.erro) {
      setLoading(false);
      setNewCep('');
      toast.error('O Cep digitado é invalido');
      return;
    }

    setAddress([...address, response.data]);
    setNewCep('');
    setLoading(false);
    toast.success('O cep foi adicionado com sucesso');
  }

  function handleDelete(cep) {
    const array = [...address];
    const index = array.indexOf(cep);

    array.splice(index, 1);
    setAddress(array);
    toast.warn('O cep foi deletado com sucesso');
  }

  return (
    <Container>
      <h1>Digite um cep</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="cep"
          type="text"
          placeholder="Adicionar CEP"
          maxLength="8"
          value={newCep}
          onChange={handleInputChange}
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

            <button type="button" onClick={() => handleDelete(a.cep)}>
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
