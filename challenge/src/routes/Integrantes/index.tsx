import { useEffect } from "react";

export default function Integrantes(){

      useEffect(()=>{
            document.title = "Integrantes";
        },[])

    return(
        <main>
            <h1 className="bg-[#e6f9fc] text-3xl space-y-4 p-4 text-cyan-700">Integrantes</h1>
            <section className="flex flex-col items-center space-y-6 p-6 bg-[#e6f9fc]">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64 text-center">
                <img src="./src/img/felipe.jpg" alt="Felipe Furlanetto" className="w-32 h-32 mx-auto rounded-md object-cover" />
                <p className="mt-3 font-semibold text-gray-800">Nome: Felipe Furlanetto</p>
                <p className="text-gray-600">RM: 562766</p>
                <div className="mt-2 flex flex-col space-y-1">
                <a href="https://github.com/Felipe-Furlanetto0504" className="text-blue-600 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/felipe-furlanetto-a64671364/" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
            </div>

            
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64 text-center">
                <img src="./src/img/joao.jpg" alt="João Victor Bueno Castelini da Silva" className="w-32 h-32 mx-auto rounded-md object-cover" />
                <p className="mt-3 font-semibold text-gray-800">Nome: João Victor Bueno Castelini da Silva</p>
                <p className="text-gray-600">RM: 564115</p>
                <div className="mt-2 flex flex-col space-y-1">
                <a href="https://github.com/Buenozw" className="text-blue-600 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/victor-bueno%E3%83%84-116757350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
            </div>

            
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64 text-center">
                <img src="./src/img/joaocc.jpg" alt="João Victor Caetano Alves da Silva" className="w-32 h-32 mx-auto rounded-md object-cover" />
                <p className="mt-3 font-semibold text-gray-800">Nome: João Victor Caetano Alves da Silva</p>
                <p className="text-gray-600">RM: 562074</p>
                <div className="mt-2 flex flex-col space-y-1">
                <a href="https://github.com/joaocaetano1310" className="text-blue-600 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-caetano-b853222b6/" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
            </div>
            </section>
        </main>
    );
}