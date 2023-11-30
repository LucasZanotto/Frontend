import { useState } from 'react';
import Header from "../components/Header";
import './Administrativo.css';
import {inserirMensagem} from '../utils/api';



export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

// var obj = {
//   nome: "nome da pessoa", 
//   email: "email informado", 
//   mensagem: "a mensagem informada"} 

  const enviarForm = async (e) => {
    e.preventDefault();
    const mensagemContato = {nome, email, mensagem};
    console.log(mensagemContato);
    await inserirMensagem(mensagemContato);
    setNome("");
    setEmail("");
    setMensagem("");
    alert('Formulário enviado com sucesso');
  }

  return (
    <div>
      <Header />
      <h1>Contato</h1>
      <form className='sla01'>
      <label htmlFor='nome'>Nome</label>
        <input id='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        <label htmlFor='email'>Email</label>
        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='mensagem'>Mensagem</label>
        <textarea className='' id='mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        <button onClick={enviarForm} type='submit'>Entrar</button>
      </form>
    </div>
  );
}