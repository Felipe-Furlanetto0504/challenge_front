import { useEffect, useState } from "react";
import type { Tiporemedio } from "../../types/tipoRemedio";
import { Link } from "react-router-dom";

export default function Remedios() {
  useEffect(() => {
    document.title = "Rémedios";
  }, []);

  const [remedios, setRemedios] = useState<Tiporemedio[]>([]);

  useEffect(() => {
    const fetchRemedios = async () => {
      const response = await fetch("http://localhost:3000/remedios");
      const data: Tiporemedio[] = await response.json();
      setRemedios(data);
    };

    fetchRemedios();
  }, []);

  return (
    <main>
      <h1 className="bg-[#e6f9fc] text-3xl space-y-4 p-4 text-cyan-700">
        Rémedios
      </h1>
      <section className="bg-[#e6f9fc] ">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>PREÇO</th>
            </tr>
          </thead>
          <tbody>
            {remedios.map((remedios, id) => (
              <tr key={id}>
                <td>{remedios.id}</td>
                <td>{remedios.nome}</td>
                <td>{remedios.preco}</td>
                <td>
                  <Link to={`/visualizar/remedios/${remedios.id}`}>Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Todos os Rémedios: {remedios.length}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  );
}
