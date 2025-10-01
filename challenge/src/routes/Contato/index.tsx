import { useEffect } from "react";

export default function Contato() {

  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main>

      <h1 className="bg-[#e6f9fc] text-3xl space-y-4 p-4 text-cyan-700">Contato</h1>

     <section className="p-4 bg-[#e6f9fc] space-y-4 h-[63.7vh]">
  
  <div>
    <h2 className="font-semibold italic text-gray-800">Endereço:</h2>
    <div className="bg-[#ffffff] border border-gray-400 rounded-md p-3 mt-1">
      <p className="text-gray-800">
        Av. Dr. Enéas de Carvalho Aguiar, 255 Cerqueira César 05403-000 São
        Paulo - Brasil Tel.: (011) 2661-0000
      </p>
    </div>
  </div>

  
  <div>
    <h2 className="font-semibold italic text-gray-800">E-mail:</h2>
    <div className="bg-[#ffffff] border border-gray-400 rounded-md p-3 mt-1">
      <p className="text-gray-800">webmaster.nci@hc.fm.usp.br</p>
    </div>
  </div>


  <div>
    <h2 className="font-semibold italic text-gray-800">Site Oficial:</h2>
    <div className="bg-[#ffffff] border border-gray-400 rounded-md p-3 mt-1">
      <a href="http://www.hc.fm.usp.br" 
         className="text-blue-600 hover:underline">
         Portal Oficial do HC
      </a>
    </div>
  </div>
</section>


    </main>
  );
  
}
