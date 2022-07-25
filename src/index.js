import cipher from './cipher.js';

const encodeBtn = document.getElementById('btnEncode');
const decodeBtn = document.getElementById('btnDecode');
const message = document.getElementById('inputMessage').value;
const offset = parseInt(document.getElementById('inputOffset').value);

encodeBtn.addEventListener('click', () => {
  let result = cipher.encode(offset, message);
  document.getElementById('outputMessage').value = result;
});

decodeBtn.addEventListener('click', () => {
  let resultDecode = cipher.decode(offset, message);
  document.getElementById('outputMessage').value = resultDecode;
});