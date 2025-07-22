async function consultaCep(event) {
  event.preventDefault();
  const cep = document.getElementById("formulario").elements["cep"].value;
  const endereco = await mostraCep(cep);
  document.getElementById("resultado").innerText = formataEndereco(endereco);

  /* if (cep.length !== 8) {
   resultado.innerText = "Erro! O CEP deve conter 8 dígitos.";
    return;
   }
  if (!/^\d{8}$/.test(cep)) {
    resultado.innerText = "Erro! O CEP deve conter apenas números.";
    return;
  }
  try {
    const endereco = await mostraCep(cep);

    if (endereco.erro) {
      resultado.innerText = "Erro! CEP não encontrado";
      return;
    }

    resultado.innerText = formataEndereco(endereco);
  } catch (error) {
    resultado.innerText = "Serviço não disponível. Tente novamente mais tarde.";
  }*/
}

async function mostraCep(cep) {
  const url = "https://viacep.com.br/ws/" + cep + "/json/";
  const resposta = await fetch(url);
  const body = await resposta.json();
  console.log(body);
  return body;
}
function formataEndereco(endereco) {
  return (
    endereco.logradouro +
    ", " +
    endereco.bairro +
    ", " +
    endereco.localidade +
    " (" +
    endereco.uf +
    ")"
  );
}
