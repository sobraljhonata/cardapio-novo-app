import React, { useEffect, useState } from "react";
import { Prato } from "./PratoDetalhes";
import PratoCard from "./PratoCard";

const Home: React.FC = () => {
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await fetch("http://localhost:3000/pratos");
        if (!response.ok) {
          throw new Error("Falhou ao buscar os pratos");
        }
        const data = await response.json();
        setPratos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="Home">
      <div className="banner">
        <img src="/terra_das_aguas.jpg" alt="Terra das Águas" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="dish-list">
        {pratos.map((prato) => (
          <PratoCard
            key={prato.id}
            name={prato.nome}
            cuisine={prato.cozinha}
            imageUrl={prato.imagem}
            description={prato.descricao_resumida}
            id={prato.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
