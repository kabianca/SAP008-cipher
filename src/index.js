import cipher from './cipher.js';

const encodeBtn = document.getElementById('btnEncode');
const decodeBtn = document.getElementById('btnDecode');

encodeBtn.addEventListener('click', () => {
  let original = document.getElementById('code').value.toUpperCase();
  let shift = parseInt(document.getElementById('offsetCode').value);
  let result = cipher.encode(original, shift);
  document.getElementById("codeMsg").value = result;
});

decodeBtn.addEventListener('click', () => {
  let encryptMsg = document.getElementById('code').value.toUpperCase();
  let shiftDecode = parseInt(document.getElementById('offsetCode').value);
  let resultdecode = cipher.decode(encryptMsg, shiftDecode);
  document.getElementById("codeMsg").value = resultdecode;
});