
function gerarUUID() {
  return 'FxxxxxxxxxxM'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}


const meuID = gerarUUID();


function send() {

  const numero = '558195156752';

  const prazo = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString();

  const selectedRadio = document.querySelector("input[name='grupo1']:checked").value
  //const checkboxes = document.querySelector("input[name='checkbox']:checked").value
  var nome = document.getElementById('nome').value;
  var cnpj = document.getElementById('cnpj').value;
  var setor = document.getElementById('setor').value;
  var address = document.getElementById('address').value;
  var fone = document.getElementById('fone').value;
  var email = document.getElementById('email').value;
  var tipo = document.getElementById('tipo').value;
  var msg = document.getElementById('msg').value;

  // Mensagem a ser enviada
  var mensagem = `Olá, em nome da empresa: ${nome},\n CNPJ: ${cnpj}, Telefone: ${fone}, quero agendar um serviço:\n-Tipo de equipamento com defeito: ${tipo}\n- ${selectedRadio}\n- Endereço: ${address}\n-Departamento/Setor da Atividade: ${setor}\n- Descrição do problema: ${msg}\nPrazo para Execução: ${prazo}\n-E-mail para contato: ${email}\n- *Número de Ordem de serviço:* `

  // URL do WhatsApp
  var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem) + (meuID);

  // Abrir a URL no navegador
  window.open(url);
}