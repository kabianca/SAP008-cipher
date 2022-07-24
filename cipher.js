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
        // else {
        //   codeResult += message[i];
        // }
        // else if (codeLetter == 32) {
        //   codeResult += message[i];
        // }
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
        // else {
        //   decodeResult += message[i];
        // }
        // else if (decodeLetter < 65 && decodeLetter != 32) {
        //   let newLetterDecode = (((decodeLetter - 90 - inputOffset) % 26) + 90) + 26
        //   decodeResult += String.fromCharCode(newLetterDecode);
        // }
        // else if (decodeLetter == 32) {
        //   decodeResult += message[i];
        // }
    }
    return decodeResult;
  }
}

export default cipher;
