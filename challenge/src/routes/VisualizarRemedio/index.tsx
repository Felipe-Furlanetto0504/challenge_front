import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Tiporemedio } from "../../types/tipoRemedio";
import Informacoes from "../../components/Informacoes/Informacoes";

export default function VisualizarRemedios() {
  useEffect(() => {
    document.title = "Ver Remédios";
  }, []);

  const { id } = useParams();
  const [remedio, setRemedios] = useState<Tiporemedio>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/remedios/${id}`);
        if (!response.ok) throw new Error("Erro na API");
        const data: Tiporemedio = await response.json();

        setRemedios(data);
      } catch (error) {
        console.error("Erro ao buscar o remédio:", error);
      }
    })();
  }, [id]);

  return (
    <main>
      <h1>Ver Remédios</h1>
      {remedio ? (
        <Informacoes
          idprops={remedio.id}
          nomeprops={remedio.nome}
          precoprops={remedio.preco}
          descricaoprops={remedio.descricao}
        />
      ) : (
        <p>Não tem esse remédio disponível</p>
      )}
    </main>
  );
}
