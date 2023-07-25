import validator from './validator.js';

// Função para atualizar a exibição do cartão de dados (colocar denro da função)
function updateCardDataDisplay() {

  const cardDataDisplay = document.getElementById('cardDataDisplay');
  const cardNameDisplay = document.getElementById('cardNameDisplay');
  const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');
  const cardCVCNumber = document.getElementById('cardCVCNumber');
  
  const cardNumber = document.getElementById('cardNumber').value;
  const cardName = document.getElementById('cardName').value;
  const cardExpiry = document.getElementById('cardExpiry').value;
  const cardCVC = document.getElementById('cardCVC').value;
  

  // Espelha os dados inseridos no input do cartão para a ilustração do cartão
  cardDataDisplay.textContent = validator.maskify(cardNumber);
  cardNameDisplay.textContent = `Nome do Titular: ${cardName}`; 
  cardExpiryDisplay.textContent = `Valid Thru: ${cardExpiry}`;
  cardCVCNumber.textContent = `CVC: ${cardCVC}`;
}

document.getElementById('cardNumber').addEventListener('input', updateCardDataDisplay);
document.getElementById('cardName').addEventListener('input', updateCardDataDisplay);
document.getElementById('cardExpiry').addEventListener('input', updateCardDataDisplay);
document.getElementById('cardCVC').addEventListener('input', updateCardDataDisplay);


// Função para validar o cartão 
function validateCard() {
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNameInput = document.getElementById('cardName');
  const cardExpiryInput = document.getElementById('cardExpiry');
  const cardCVCInput = document.getElementById('cardCVC');

  const cardNumber = cardNumberInput.value;
  const cardName = cardNameInput.value;
  const cardExpiry = cardExpiryInput.value;
  const cardCVC = cardCVCInput.value;

  // Verifica se algum campo está em branco
  if (cardNumber === '' || cardName === '' || cardExpiry === '' || cardCVC === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verifica se o número do cartão é válido
  if (!validator.isValid(cardNumber)) {
    alert('Número do cartão inválido.');
    return;
  }

  // Máscara os números do cartão antes de exibir no cartão de dados
  const maskedNumber = validator.maskify(cardNumber);
  cardNumberInput.value = maskedNumber;

  alert('Cartão válido!');

  // Atualiza a exibição dos cartões com as informações do cartão
  updateCardDataDisplay();
}


//função para identificar a bandeira do cartão.

function getCardLogo(cardNumber) {
  cardNumber = cardNumber.replace(/[\s-]/g, '');

  // Verificar os padrões de cartão de crédito
  if (/^3[47]\d{13}$/.test(cardNumber)) {
    return 'amex.png';
  } else if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(cardNumber)) {
    return 'diners.png';
  } else if (/^6(?:011|5\d{2})\d{12}$/.test(cardNumber)) {
    return 'discover.png';
  } else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cardNumber)) {
    return 'jcb.png';
  } else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
    return 'master.png';
  } else if (/^4\d{15}$|^4\d{12}$/.test(cardNumber)) {
    return 'visa.png';
  } else {
    return 'desconhecida.png';
  }
}

//função para mostrar logo do cartão

function updateCardlogo () {
  const cardNumberInput = document.getElementById('cardNumber');
  const cardLogoDiv = document.getElementById('cardLogo');

  const cardNumber = cardNumberInput.value;

  const cardLogoFileName = getCardLogo (cardNumber);

  cardLogoDiv.style.backgroundImage = `url('./assets/${cardLogoFileName}')`;
  
}


document.getElementById('cardNumber').addEventListener('input', updateCardlogo);

document.getElementById('validateButton').addEventListener('click', validateCard);



