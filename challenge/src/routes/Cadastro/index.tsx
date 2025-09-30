import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !senha) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
      });

      if (!response.ok) throw new Error("Erro ao cadastrar");

      // Redireciona imediatamente para /remedios
      navigate("/remedios");
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao cadastrar. Tente novamente.");
    }
  };

 

  return (
    <div >
      <h1 >Cadastro de Paciente</h1>
      <form  onSubmit={handleSubmit}>
        <label >Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          required
        />

        <label >Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button
          type="submit">
          Cadastrar
        </button>
        
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
