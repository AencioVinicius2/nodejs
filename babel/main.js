const nome = 'Aencio';
const obj = {nome};
const novoObj = {...obj};

const array = ["teste", 1, {nome:nome}, {...nome}, (valor) => {console.log(valor)}, 's']

console.log(novoObj)


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}