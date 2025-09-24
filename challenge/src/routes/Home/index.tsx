import { useEffect } from "react";

export default function Home(){

      useEffect(()=>{
            document.title = "Home";
        },[])

    return(
        <main>
            <h1>Hospital Das Clinicas</h1>

            <img src="./src/img/medico.jpg" alt="medico"/>

            <h2>Seja bem vindo</h2>
            
        </main>
    );

}