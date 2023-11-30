// OBSERVAÇÃO NÃO USEI O AJAX PORQUE ESSA POHA É ULTRAPSSADA OBRIGADO, MANO O CARA USA VAR

export async function obterMensagens() {
  try {
    const response = await fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Erro ao obter mensagens:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter mensagens:', error);
    return [];
  }
}


//email: admin@admin.com
//senha: '1234'

// var obj = {
//   nome: "nome da pessoa", 
//   email: "email informado", 
//   mensagem: "a mensagem informada"} 

export async function inserirMensagem(obj) {
  try {
    const response = await fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      console.error('Erro ao inserir mensagem:', response.statusText);
      return;
    }
    const data = await response.json();
    console.log('Mensagem inserida com sucesso:', data);
  } catch (error) {
    console.error('Erro ao inserir mensagem:', error);
  }
}



export async function validarUsuario(objLoginSenha) {
  try {
    const response = await fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/usuarios/validar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objLoginSenha),
    });

    if (!response.ok) {
      console.error('Erro ao validar usuário:', response.statusText);
      return false;
    }

    const data = await response.json();
    console.log('Usuário validado com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro ao validar usuário:', error);
    return false;
  }
}
