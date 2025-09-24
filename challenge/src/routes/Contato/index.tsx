import { useEffect } from "react";

export default function Contato() {

  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main>

      <h1>Contato</h1>

      <section>
        <h2>Endereço:</h2>
        <div>
        <p>
          Av. Dr. Enéas de Carvalho Aguiar, 255 Cerqueira César 05403-000 São
          Paulo - Brasil Tel.: (011) 2661-0000
        </p>

        <h2>E-mail:</h2>
        <p>webmaster.nci@hc.fm.usp.br</p>

        <h2>Site Oficial:</h2>
        <a href="http://www.hc.fm.usp.br">Portal Ofical do HC</a>
        </div>
      </section>

    </main>
  );
  
}
