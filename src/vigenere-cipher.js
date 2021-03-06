const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

encrypt(message, key) {
    if (!message || !key) throw new Error();
    const arrStr = message.toUpperCase().split('');
  
    message = message.toUpperCase().split(' ').join('');
  
    const countRepeat = Math.ceil(message.length / key.length);
  
    key = key.repeat(countRepeat).slice(0, message.length).toUpperCase();
  
    let cipher = '';
  
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] === ' ') {
        cipher += arrStr[i];
        arrStr.splice(i, 1);
      } 
  
      if (arrStr[i].charCodeAt() < 'A'.charCodeAt() || arrStr[i].charCodeAt() > 'Z'.charCodeAt()) {
        cipher += arrStr[i];
      } else {
        const digit = ((arrStr[i].charCodeAt() + key[i].charCodeAt()) % 26) + 65;
  
        cipher += String.fromCharCode(digit);
      }
    }
  
    return this.direction ? cipher : cipher.split('').reverse().join('') ;
  }
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();
    
    const arrStr = encryptedMessage.toUpperCase().split('');

    encryptedMessage = encryptedMessage.toUpperCase().split(' ').join('');

    const countRepeat = Math.ceil(encryptedMessage.length / key.length);

    key = key.repeat(countRepeat).slice(0, encryptedMessage.length).toUpperCase();

    let cipher = '';

    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] === ' ') {
        cipher += arrStr[i];
        arrStr.splice(i, 1);
      } 

      if (arrStr[i].charCodeAt() < 'A'.charCodeAt() || arrStr[i].charCodeAt() > 'Z'.charCodeAt()) {
        cipher += arrStr[i];
      } else {
        const digit = ((arrStr[i].charCodeAt() + 26 - key[i].charCodeAt()) % 26) + 65;

        cipher += String.fromCharCode(digit);
      }
    }

    return this.direction ? cipher : cipher.split('').reverse().join('') ;
  }
}

module.exports = VigenereCipheringMachine;
