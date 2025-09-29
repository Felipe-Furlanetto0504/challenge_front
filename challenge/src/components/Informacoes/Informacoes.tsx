

export default function Informacoes(props:{idprops:number,nomeprops:string,precoprops:number,descricaoprops:string}){
    return(
        <div>
            <h2>ID: {props.idprops}</h2>
            <p>Nome: {props.nomeprops}</p>
            <p>Preço: {props.precoprops}</p>
            <p>Descrição: {props.descricaoprops}</p>
        </div>
    );
}