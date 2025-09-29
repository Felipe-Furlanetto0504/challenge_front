import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Tiporemedio } from "../../types/tipoRemedio";
import Informacoes from "../../components/Informacoes/Informacoes";

export default function VisualizarRemedios(){
    useEffect(() => {
    document.title = "Ver Remédios";
  }, []);


  const {id} = useParams();

  const[remedio, setRemedios] = useState<Tiporemedio>();

  useEffect(()=>{
  
    (async()=>{
      const response = fetch(`http://localhost:3000/remedios`);
      const data: Tiporemedio[] = await (await response).json();
      const achaproduto: Tiporemedio | undefined = data.find(a => a.id === Number (id));
      setRemedios(achaproduto);

    })();
         
  },[]);

  return(
    <main>
        <h1>Ver Remédios</h1>
        {remedio ? <Informacoes idprops={remedio.id}nomeprops={remedio.nome} precoprops={remedio.preco} descricaoprops={remedio.descricao}/> : <p>Não tem esse remedio disponivel</p>}



    </main>

  );

  

}