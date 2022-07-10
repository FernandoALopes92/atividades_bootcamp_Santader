// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";
// Vou adicionar mais atributos
// cargo - Job titles
// salario

// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'John',
    cargo: 'Desenvolvedor',
    salario: 5000
}

// Resposta 2 

const funcionario2: {codigo: number, nome: string, cargo: string, salario: number} = {
    codigo: 10,
    nome: 'John 2',
    cargo: 'Desenvolvedor', 
    salario: 5000
}

// Resposta com Interface
interface IFuncionario {
    codigo: number,
    nome: string,
    cargo: string, 
    salario: number
}

const funcionarioobj1 ={} as IFuncionario;
    funcionarioobj1.codigo = 10;
    funcionarioobj1.nome = 'John 2';
    funcionarioobj1.cargo = 'Desenvolvedor'; 
    funcionarioobj1.salario = 5000;

 const funcionarioobj2: IFuncionario = {
    codigo : 10,
    nome : 'John',
    cargo: 'Desenvolvedor', 
    salario: 5000
 };