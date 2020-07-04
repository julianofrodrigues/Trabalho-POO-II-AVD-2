/* eslint-disable camelcase */
import React, { useState, FormEvent, MouseEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Cards, Error } from './styles';
import logoImg from '../../assets/icon.png';

import { Card } from "../../services/interfaces";

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [cards, setCards] = useState<Card[]>([]);

  async function handleAddCard(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    try {
      const response = (await api.get(`cards/search?q=${newRepo}+lang%3Apt`)).data
      setCards(response.data)
    } catch (err) {
      alert(err)
    }
  }

  async function handleDeleteCard(
    e: MouseEvent<HTMLButtonElement>,
    name: string,
  ): Promise<void> {
    e.preventDefault();

    const filteredCards = cards.filter(
      card => card.name !== name,
    );

    setCards(filteredCards);
  }

  return (
    <>
      <img src={logoImg} alt="MTG Search" />
      <Title>MTG Search</Title>
      <Form hasError={!!inputError} onSubmit={handleAddCard}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do card que busca aqui!"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Cards>
        {cards.map((card, index) => (
          <div className="col-6" key={index}>
            <Link
              key={card.id}
              to={`/card/${card.id}`}
            >
              <img src={card.image_uris ? card.image_uris.border_crop : (card.card_faces ? card.card_faces[0].image_uris.border_crop : '')} alt="MTG Search" />
            </Link>
          </div>
        ))}
      </Cards>
    </>
  );
};

export default Dashboard;
