const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = 'true') {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error;

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (message.length > key.length) {
      key += key;
    }
    
    let result = '';
    let position = 0;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {

        charCode -= 65;
        let encryptCode = key.charCodeAt(position) - 65;
        let resultCode = ((charCode + encryptCode) % 26) + 65;

        result += String.fromCharCode(resultCode);
        position++;
      } else {
        result += message[i];
      }
    }

    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }    

  decrypt(messageEncrypted, key) {
    if (!messageEncrypted || !key) throw new Error;

    messageEncrypted = messageEncrypted.toUpperCase();
    key = key.toUpperCase();

    while (messageEncrypted.length > key.length) {
      key += key;
    }

    let result = '';
    let position = 0;

    for (let i = 0; i < messageEncrypted.length; i++) {
      let charCode = messageEncrypted.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {

        charCode -= 65;
        let encryptCode = key.charCodeAt(position) - 65;
        let resultCode = ((charCode + 26 - encryptCode) % 26) + 65;

        result += String.fromCharCode(resultCode);
        position++;
      } else {
        result += messageEncrypted[i];
      }
    }

    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }
}

module.exports = VigenereCipheringMachine;
