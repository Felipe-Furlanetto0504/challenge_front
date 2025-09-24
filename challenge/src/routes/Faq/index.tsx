import { useEffect } from "react";

export default function Faq() {

  useEffect(() => {
    document.title = "Faq";
  }, []);

  return (
    <main>
      <h1>Faq</h1>

      <div>
        <h2>Como agendar uma consulta no HC?</h2>
        <p>Pelo SUS, com encaminhamento feito por um médico da UBS.</p>
      </div>

      <div>
        <h2>Tenho pedido médico. Posso levar ao HC?</h2>
        <p>Não. Leve o pedido à UBS, que fará o encaminhamento pelo SUS.</p>
      </div>

      <div>
        <h2>Posso agendar pela internet?</h2>
        <p>Não. Agendamento só pela rede pública (UBS).</p>
      </div>

      <div>
        <h2>E em caso de urgência?</h2>
        <p>
          Vá a uma UPA ou pronto-socorro. Se necessário, eles encaminham para o HC.
        </p>
      </div>

      <div>
        <h2>Como reagendar ou cancelar?</h2>
        <p>Procure a UBS onde o pedido foi feito.</p>
      </div>

    </main>
  );

}
