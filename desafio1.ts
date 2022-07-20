
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code: 10,
    name: 'Jhon'
};


let employee2: {code: number, name: string} + {
    code: 10,
    name:'Jhon'
}


interface Funcionario {
    code: number,
    name: string
};


let funcionario3: Funcionario = {
    code: 200,
    name: 'Jhon'
}