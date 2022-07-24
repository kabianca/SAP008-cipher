import cipher from './cipher.js';

const encodeBtn = document.getElementById('btnEncode');
const decodeBtn = document.getElementById('btnDecode');

// document.getElementById("code").onkeyup = function() {isLetter()};

// function isLetter () {
//   let message = document.getElementById('code');
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
  let original = document.getElementById('code').value.toUpperCase();
  let shift = parseInt(document.getElementById('offsetCode').value);
    // try {
    //   if(original == "") throw "O campo de mensagem está vazio";
    //   shift = Number(shift);
    //   if(isNaN(shift)) throw "O deslocamento precisa ser um número";
    //   if(shift < 0) throw "O deslocamente não pode ser menor que 0";
    // }
    // catch(err) {
    //   document.getElementById('error').innerHTML = "Erro: " + err + ".";
    // }
    // finally {
  let result = cipher.encode(original, shift);
  document.getElementById('codeMsg').value = result;
    // }
  
});

decodeBtn.addEventListener('click', () => {
  let encryptMsg = document.getElementById('code').value.toUpperCase();
  let shiftDecode = parseInt(document.getElementById('offsetCode').value);
  let resultdecode = cipher.decode(encryptMsg, shiftDecode);
  document.getElementById('codeMsg').value = resultdecode;
});