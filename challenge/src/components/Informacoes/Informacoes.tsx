export default function Informacoes(props: {
  idprops: number;
  nomeprops: string;
  precoprops: number;
  descricaoprops: string;
}) {
  return (
    <section className="flex justify-center items-center bg-[#e6f9fc] h-102 py-20">
      <div className="bg-[#28659b] border border-black rounded-md p-6 w-80 h-48 flex flex-col justify-center items-center text-white shadow-lg">
        <h2>ID: {props.idprops}</h2>
        <p>Nome: {props.nomeprops}</p>
        <p>Preço: {props.precoprops}</p>
        <p>Descrição: {props.descricaoprops}</p>
      </div>
    </section>
  );
}
