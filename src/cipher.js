const cipher = {

  encode:
  function (original, shift) {
    let codeResult = '';
  
    for(let i = 0; i < original.length; i++) {
      let codeLetter = original[i].charCodeAt();
      let newCodeLetter = (codeLetter - 65 + shift) % 26 + 65
        if (newCodeLetter > 64 && newCodeLetter < 91) {
          codeResult += String.fromCharCode(newCodeLetter);
        }
        else if (codeLetter == 32) {
          codeResult += original[i];
        }
    }
    return codeResult;
  },

  decode:
  function (encryptMsg, shiftDecode) {
    let decodeResult = '';
  
    for(let i = 0; i < encryptMsg.length; i++) {
      let decodeLetter = encryptMsg[i].charCodeAt();
      let newLetterDecode = (((decodeLetter - 65 - shiftDecode) % 26) + 65)
        if (newLetterDecode > 64 && newLetterDecode < 91) {
          decodeResult += String.fromCharCode(newLetterDecode);
        }
        else if (newLetterDecode < 65 && decodeLetter != 32) {
          decodeResult += String.fromCharCode(newLetterDecode + 26);
        }
        else if (decodeLetter == 32) {
          decodeResult += encryptMsg[i];
        }
    }
    return decodeResult;
  }
}

export default cipher;
