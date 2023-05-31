import ValidCPF from './ValidCPF';

export default class GenerateCPF {
    rand(min = 100000000, max = 99999999) {
        return String(Math.floor(Math.ramdom() * (max -min) + min));
    }

    generateNewCpf() {
        const cpfWithoutDigits = this.rand();
        const digit1 = ValidCPF.generateDigit(cpfWithoutDigits);
        const digit2 = ValidCPF.generateDigit(cpfWithoutDigits + digit1);
        const newCpf = cpfWithoutDigits + digit1 + digit2;
        return newCpf;
    }
}