import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export interface Prato {
  id: number;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  valor: number;
  imagem: string;
  descricao_detalhada?: string;
}

const PratoDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dish, setDish] = useState<Prato | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPratoDetalhes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pratos/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dish details');
        }
        const data = await response.json();
        setDish(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratoDetalhes();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!dish) {
    return <p>Dish not found</p>;
  }

  return (
    <div className="DishDetails">
      <div className="dish-details-card">
        <img src={dish.imagem} alt={dish.nome} />
        <h1>{dish.nome}</h1>
        <p><strong>Cozinha:</strong> {dish.cozinha}</p>
        <p><strong>Valor:</strong> R${dish.valor.toFixed(2)}</p>
        <p><strong>Descrição da sua experiência Gastronômica:</strong> {dish.descricao_detalhada}</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    </div>
  );
};

export default PratoDetalhes;