
function gerarUUID() {
  return 'FxxxxxxxxxxM'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}


const meuID = gerarUUID();


function enviarMensagemWhatsApp() {

  const numero = '558197915239';

  const prazo = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString();

  const selectedRadio = document.querySelector("input[name='grupo1']:checked").value
  console.log(selectedRadio) // Valor do input selecionado
  const checkboxes = document.querySelector("input[name='checkbox']:checked").value
  
      console.log(checkboxes);
    
  
  // Capturar valores do formulário
  var nome = document.getElementById('nome').value;
  var cnpj = document.getElementById('cnpj').value;
  var setor = document.getElementById('setor').value;
  var address = document.getElementById('address').value;
  var fone = document.getElementById('fone').value;
  var email = document.getElementById('email').value;
  var tipo = document.getElementById('tipo').value;
  var msg = document.getElementById('msg').value;

  // Mensagem a ser enviada
  var mensagem = `Olá, em nome da empresa: ${nome}, CNPJ: ${cnpj}, Telefone: ${fone}, quero agendar um serviço:\n-  ${checkboxes} : ${selectedRadio}\n- Endereço: ${address}\n-Departamento/Setor da Atividade: ${setor}\n-Tipo de equipamento com defeito: ${tipo}\n- Descrição do problema: ${msg}\nPrazo para Execução: ${prazo}\n-E-mail para contato: ${email}\n- *Número de Ordem de serviço:* `

  // URL do WhatsApp
  var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem) + (meuID);

  // Abrir a URL no navegador
  window.open(url);
}