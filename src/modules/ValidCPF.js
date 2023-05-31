export default class ValidCPF {
    constructor(cpfSent) {
      Object.defineProperty(this, 'cpfClean', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfSent.replace(/\D+/g, '')
      });
    }
  
    itsSequence() {
      return this.cpfClean.charAt(0).repeat(11) === this.cpfClean;
    }
  
    generateNewCpf() {
      const cpfWithoutDigits = this.cpfClean.slice(0, -2);
      const digit1 = ValidCPF.generateDigit(cpfWithoutDigits);
      const digit2 = ValidCPF.generateDigit(cpfWithoutDigits + digit1);
      this.newCPF = cpfWithoutDigits + digit1 + digit2;
    }
  
    static generateDigit(cpfWithoutDigits) {
      let total = 0;
      let reverse = cpfWithoutDigits.length + 1;
  
      for(let numericString of cpfWithoutDigits) {
        total += reverse * Number(numericString);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    valid() {
      if(!this.cpfClean) return false;
      if(typeof this.cpfClean !== 'string') return false;
      if(this.cpfClean.length !== 11) return false;
      if(this.itsSequence()) return false;
      this.generateNewCpf();
  
      return this.newCPF === this.cpfClean;
    }
  }


