import { useEffect } from "react";

export default function Integrantes(){

      useEffect(()=>{
            document.title = "Integrantes";
        },[])

    return(
        <main>
            <h1>Integrantes</h1>
                <section>
                    <div>
                        <img src="./src/img/felipe.jpg" alt="Felipe Furlanetto"/>
                        Nome:Felipe Furlanetto
                        Rm:562766
                        <a href="https://github.com/Felipe-Furlanetto0504">GitHub</a>
                        <a href="https://www.linkedin.com/in/felipe-furlanetto-a64671364/">Linkedin</a>
                    </div>
                
                    <div>
                        <img src="./src/img/joao.jpg" alt="João Victor Bueno Castelini da Silva"/>
                        Nome: João Victor Bueno Castelini da Silva
                        Rm:564115
                        <a href="https://github.com/Buenozw">GitHub</a>
                        <a href="https://www.linkedin.com/in/victor-bueno%E3%83%84-116757350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a>
                    </div>               
            
                    <div>
                        <img src="./src/img/joaocc.jpg" alt="João Victor Caetano Alves da Silva"/>
                        Nome:João Victor Caetano Alves da Silva
                        Rm: 562074
                        <a href="https://github.com/joaocaetano1310">GitHub</a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-caetano-b853222b6/">Linkedin</a>
                    </div>
                </section>
        
        </main>
    );
}