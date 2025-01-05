const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirectionReversed = true) {
    this.isDirectionReversed = isDirectionReversed;
  }

  isDataValid(message, keyWord) {
    if (!message || !keyWord) {
      throw new Error('Incorrect arguments!');
    }
  }

  transformData(msg, key) {
    const message = msg.toUpperCase();
    let keyWord = key.toUpperCase();

    const clearedMessageLength = message.replaceAll(' ', '').length;
    const repetitionsCount = Math.ceil(clearedMessageLength / keyWord.length);
    keyWord = keyWord.repeat(repetitionsCount).slice(0, clearedMessageLength);

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        keyWord = `${keyWord.slice(0, i)} ${keyWord.slice(i)}`;
      }
    }

    return [message, keyWord];
  }

  isAlphabetSymbol(char) {
    const startCode = 'A'.codePointAt();
    const endCode = 'Z'.codePointAt();
    const charCode = char.codePointAt();

    return startCode <= charCode && charCode <= endCode;
  }

  run(msg, key, method = 'encrypt') {
    this.isDataValid(msg, key);

    const [message, keyWord] = this.transformData(msg, key);
    let cipher = '';

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        cipher += message[i];
        continue;
      }

      if (this.isAlphabetSymbol(message[i])) {
        let charCode = null;

        if (method === 'encrypt') {
          charCode = (message[i].codePointAt() + keyWord[i].codePointAt()) % 26 + 65;
        } else if (method === 'decrypt') {
          charCode = (message[i].codePointAt() + 26 - keyWord[i].codePointAt()) % 26 + 65;
        }

        cipher += String.fromCodePoint(charCode);
      } else {
        cipher += message[i];
      }
    }

    return this.isDirectionReversed ? cipher : cipher.split('').reverse().join('');
  }

  encrypt(message, keyWord) {
    return this.run(message, keyWord);
  }

  decrypt(encryptedMessage, keyWord) {
    return this.run(encryptedMessage, keyWord, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
