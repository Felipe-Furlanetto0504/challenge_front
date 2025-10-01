import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <h1 className="bg-[#e6f9fc] text-3xl space-y-4 p-4 text-cyan-700">
        Hospital Das Clínicas
      </h1>
      <section className="min-h-screen bg-[#e6f9fc] flex flex-col items-center  p-6">
        <div className=" p-4 flex flex-col items-center">
          <img
            src="./src/img/medico.jpg"
            alt="Médico"
            className="rounded-md shadow-md md:w-500 object-cover h-70"
          />
          <h2 className="mt-4 text-lg font-semibold italic text-[#092d42]">
            Seja Bem-Vindo
          </h2>
          <div className="max-w-3xl bg-white border border-black rounded-md shadow-md p-6 leading-relaxed space-y-4">
            <p className="text-justify text-gray-800">
              No Hospital das Clínicas, acreditamos que cuidar da saúde vai além
              do atendimento médico: envolve acolhimento, praticidade e
              respeito. Pensando especialmente em nossos pacientes idosos,
              desenvolvemos o Consulta Fácil, uma solução criada para tornar o
              processo de marcar consultas médicas simples, rápido e acessível.
            </p>

            <p className="text-justify text-gray-800">
              Sabemos que muitas vezes a tecnologia pode ser uma barreira. Por
              isso, nossa plataforma foi pensada para ser intuitiva e de fácil
              navegação, permitindo que cada paciente ou familiar agende
              consultas de forma segura, sem complicações e no conforto de casa.
            </p>

            <p className="text-justify text-gray-800">
              Selecione uma das opções logo acima: Rémedios, Contato, Faq,
              Sobre, Cadastro ou Integrantes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
