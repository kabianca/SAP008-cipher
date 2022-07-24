import cipher from './cipher.js';

const encodeBtn = document.getElementById('btnEncode');
const decodeBtn = document.getElementById('btnDecode');

// document.getElementById("inputMessage").onkeyup = function() {isLetter()};

// function isLetter () {
//   let message = document.getElementById('outputMessage');
//   message.addEventListener('keypress', checkMessage, false);
// }

// function checkMessage(evt) {
//   let charCode = evt.charCode;
//   if (charCode != 0) {
//     if (charCode < 65 && charCode !=32 || charCode > 90 && charCode < 97 || charCode > 122) {
//         evt.preventDefault();
//         alert("teste");
//     }
//   }
// }

encodeBtn.addEventListener('click', () => {
  let message = document.getElementById('inputMessage').value.toUpperCase();
  let offset = parseInt(document.getElementById('inputOffset').value);
    // try {
    //   if(message == "") throw "O campo de mensagem está vazio";
    //   inputOffset = Number(inputOffset);
    //   if(isNaN(inputOffset)) throw "O deslocamento precisa ser um número";
    //   if(inputOffset < 0) throw "O deslocamente não pode ser menor que 0";
    // }
    // catch(err) {
    //   document.getElementById('error').innerHTML = "Erro: " + err + ".";
    // }
    // finally {
  let result = cipher.encode(offset, message);
  document.getElementById('outputMessage').value = result;
    // }
  
});

decodeBtn.addEventListener('click', () => {
  let messageDecode = document.getElementById('inputMessage').value.toUpperCase();
  let offsetDecode = parseInt(document.getElementById('inputOffset').value);
  let resultDecode = cipher.decode(offsetDecode, messageDecode);
  document.getElementById('outputMessage').value = resultDecode;
});