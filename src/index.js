import cipher from './cipher.js';

const encodeBtn = document.getElementById('btnEncode');
const decodeBtn = document.getElementById('btnDecode');

encodeBtn.addEventListener('click', () => {
  let message = document.getElementById('inputMessage').value;
  let offset = parseInt(document.getElementById('inputOffset').value);
  let result = cipher.encode(offset, message);
  document.getElementById('outputMessage').value = result;  
});

decodeBtn.addEventListener('click', () => {
  let messageDecode = document.getElementById('inputMessage').value;
  let offsetDecode = parseInt(document.getElementById('inputOffset').value);
  let resultDecode = cipher.decode(offsetDecode, messageDecode);
  document.getElementById('outputMessage').value = resultDecode;
});