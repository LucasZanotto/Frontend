import { useEffect, useState } from "react";
import Header from "../components/Header";
import { obterMensagens } from '../utils/api';
import './Administrativo.css'; 

export default function AdministrativoMsg() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    async function fetchMensagens() {
      try {
        const resultado = await obterMensagens();
        setMensagens(resultado);
      } catch (erro) {
        console.error('Erro:', erro);
      }
    }

    fetchMensagens();
  }, []); 

  return (
    <div>
      <Header />
      <h1 className="titulo-centralizado">Mensagens Recebidas</h1>
      <div className="tabela-container">
        <table className="tabela-mensagens">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {mensagens.map((mensagem, index) => (
              <tr key={index}>
                <td>{mensagem.nome}</td>
                <td>{mensagem.email}</td>
                <td>{mensagem.mensagem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
