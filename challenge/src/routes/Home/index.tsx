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
            className="rounded-md shadow-md w-72 md:w-96 object-cover"
          />
          <h2 className="mt-4 text-lg font-semibold italic text-[#092d42]">
            Seja Bem-Vindo
          </h2>
        </div>
      </section>
    </main>
  );
}
