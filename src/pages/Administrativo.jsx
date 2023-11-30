import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import { validarUsuario } from '../utils/api';
import './Administrativo.css';

export default function Administrativo() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

//email: admin@admin.com
//senha: '1234'

  const enviarForm = async (e) => {
    e.preventDefault();

    const usuarioValido = await validarUsuario({ email, senha });

    if (usuarioValido) {
      history.push('/administrativo/msg');
    } else {
      alert('Falha na autenticação. Verifique suas credenciais.');
    }
  }

  return (
    <div>
      <Header />
      <h1>Área Administrativa</h1>
      <form className='sla01'>
        <label htmlFor='email'>Email</label>
        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='senha'>Senha</label>
        <input type='password' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button onClick={enviarForm} type='submit'>Entrar</button>
      </form>
    </div>
  );
}
