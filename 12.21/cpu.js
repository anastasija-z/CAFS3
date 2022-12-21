// Naudodami NodeJS parodykite procesoriaus pavadinimą ir jame esančių branduolių skaičių

let os = require('os');

const systemCpuModel = os.cpus()[0].model;
console.log(systemCpuModel);

const numOfCpus = os.cpus().length;
console.log(numOfCpus);
