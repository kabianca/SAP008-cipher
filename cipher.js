const cipher = {
  encode:
  function (original, shift) {
    let codeResult = '';
  
    for(let i = 0; i < original.length; i++) {
      let codeLetter = original[i].charCodeAt();
      let newCodeLetter = ((codeLetter - 65 + shift) % 26) + 65
        if (newCodeLetter >= 65 && newCodeLetter <= 90) {
          codeResult += String.fromCharCode(newCodeLetter);
        }
        else {
          codeResult += original[i]
        }
    }
    return codeResult;
  },

  decode:
  function (encryptMsg, shiftDecode) {
    let decodeResult = '';
  
    for(let i = 0; i < encryptMsg.length; i++) {
      let decodeLetter = encryptMsg[i].charCodeAt();
      let newLetterDecode = ((decodeLetter - "Z".charCodeAt(0) - shiftDecode) % 26) + "Z".charCodeAt(0)
        if (newLetterDecode >= 65 && newLetterDecode <= 90) {
          decodeResult += String.fromCharCode(newLetterDecode);
        }
        else {
          decodeResult += encryptMsg[i]
        }
    }
    return decodeResult;
  }
}

export default cipher;
