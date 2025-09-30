import { useEffect } from "react";

export default function Faq() {

  useEffect(() => {
    document.title = "Faq";
  }, []);

  return (
    <main>
      <h1 className="bg-[#e6f9fc] text-3xl space-y-4 p-4 text-cyan-700">Faq</h1>
      <section className="space-y-4 p-4 bg-[#e6f9fc] ">
        <div className="bg-[#28659b] border border-black rounded-md p-3">
          <h2 className="font-bold">Como agendar uma consulta no HC?</h2>
          <p>Pelo SUS, com encaminhamento feito por um médico da UBS.</p>
        </div>

        <div className="bg-[#28659b] border border-black rounded-md p-3">
          <h2 className="font-bold">Tenho pedido médico. Posso levar ao HC?</h2>
          <p>Não. Leve o pedido à UBS, que fará o encaminhamento pelo SUS.</p>
        </div>

        <div className="bg-[#28659b] border border-black rounded-md p-3">
          <h2 className="font-bold">Posso agendar pela internet?</h2>
          <p>Sim. Agora nesse site é possivel agendar pela internet.</p>
        </div>

        <div className="bg-[#28659b] border border-black rounded-md p-3">
          <h2 className="font-bold">E em caso de urgência?</h2>
          <p>
            Vá a uma UPA ou pronto-socorro. Se necessário, eles encaminham para o HC.
          </p>
        </div>

        <div className="bg-[#28659b] border border-black rounded-md p-3">
          <h2 className="font-bold">Como reagendar ou cancelar?</h2>
          <p>Procure a UBS onde o pedido foi feito.</p>
        </div>
      </section>

    </main>
  );

}
