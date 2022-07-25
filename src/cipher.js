const cipher = {

  encode:
  function (inputOffset, message) {
    let codeResult = '';

    for(let i = 0; i < message.length; i++) {
      let codeLetter = message[i].charCodeAt();
        if (codeLetter > 64 && codeLetter < 91) {
          let newCodeLetter = (codeLetter - 65 + inputOffset) % 26 + 65
          codeResult += String.fromCharCode(newCodeLetter);
        }
        else if (codeLetter > 96 && codeLetter < 123) {
          let newCodeLetter = (codeLetter - 97 + inputOffset) % 26 + 97
          codeResult += String.fromCharCode(newCodeLetter);
        }
        else if (codeLetter > 31 && codeLetter < 34 || codeLetter == 64) {
          codeResult += message[i];
        }
    }
    return codeResult;
  },

  decode:
  function (inputOffset, message) {
    let decodeResult = '';
  
    for(let i = 0; i < message.length; i++) {
      let decodeLetter = message[i].charCodeAt();
        if (decodeLetter > 64 && decodeLetter < 91) {
          let newLetterDecode = (((decodeLetter - 90 - inputOffset) % 26) + 90)
          decodeResult += String.fromCharCode(newLetterDecode);
        }
        else if (decodeLetter > 96 && decodeLetter < 123) {
          let newLetterDecode = (((decodeLetter - 122 - inputOffset) % 26) + 122)
          decodeResult += String.fromCharCode(newLetterDecode);
        }
        else if (decodeLetter > 31 && decodeLetter < 34 || decodeLetter == 64) {
          decodeResult += message[i];
        }
    }
    return decodeResult;
  }
}

export default cipher;
