import React from 'react';
import { Link } from 'react-router-dom';

interface PratoCardProps {
  id: number;
  name: string;
  cuisine: string;
  imageUrl: string;
  description: string;
}

export interface Dish {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  description: string;
}

const PratoCard: React.FC<PratoCardProps> = ({ id, name, cuisine, imageUrl, description }) => {
  return (
    <div className="dish-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{cuisine}</p>
      <p>{description}</p>
      <Link to={`/details/${id}`}>Ver detalhes</Link>
    </div>
  );
};

export default PratoCard;