/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import { Header, CardInfo, Issues } from './styles'
import logoImg from '../../assets/icon.png'
import imagemTest from '../../assets/teste.jpg'
import { Card } from "../../services/interfaces"

interface CardParams {
  id: string;
}

const CardPage: React.FC = () => {
  const [card, setCard] = useState<Card | null>(null);
  console.log(card)
  const { params } = useRouteMatch<CardParams>();

  // Utilizar o useEffect para atualizar as informações com async await e Promise.all
  // O retorno só será feito após as duas chamadas gets finalizarem em conjunto
  useEffect(() => {
    console.log(params.id)
    async function loadData(): Promise<void> {
      const response = (await api.get(`cards/${params.id}`)).data
      setCard(response)
      // const [cards, issue] = await Promise.all([
      //   await api.get(`repos/${params.card}`),
      //   await api.get(`repos/${params.card}/issues`),
      // ]);
      // setCard(cards.data);
      // setIssues(issue.data);
      ;
    }

    loadData();
  }, [params.id]);

  return (
    <>
      <Header>
        <Link to="/">
        <img src={logoImg} alt="MTG Search" />
        </Link>
      </Header>

      {card && (
        <CardInfo>
          <div className="row">
            <div className="col-6">
              <img src={card.image_uris ? card.image_uris.border_crop : (card.card_faces ? card.card_faces[0].image_uris.border_crop : '')} alt="MTG Search" />
            </div>
            <div className="col-6">
              <p>{card.mana_cost ? `${card.printed_name} / ${card.mana_cost}` : card.printed_name}</p>
              <p>{card.printed_type_line ? `${card.printed_type_line}` : ''}</p>
              <p>{card.printed_text ? `${card.printed_text}` : ''}</p>
              <p>{card.flavor_text ? `${card.flavor_text}` : ''}</p>
              <p>{(card.power || card.toughness) ? `${card.power}/${card.toughness}` : ''}</p>
              <p>{card.artist ? `${card.artist}` : ''}</p>
            </div>
          </div>
        </CardInfo>
      )}
    </>
  );
};

export default CardPage;
