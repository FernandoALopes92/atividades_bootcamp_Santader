
// soma ('a','b'); // Já mostra que o argumento não é um number

//interfaces

// interface IAnimal{
//     nome: string;
//     tipo: 'terreste' | 'aquático';
//     // executarRugido(alturaEmDecibeis: number): void;    
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;    
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     // tipo: 'voador' // dá aviso que não pode colocar nada diferente ddo que acadastrado na interface
//     tipo: 'terreste',
//     // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terreste',
//     visaoNoturna: true,
    
// }

// Interfaces e  types

// interface IAnimal{
//     nome: string;
//     tipo: 'terreste' | 'aquático';
//     domestico: boolean 
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;    
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico= ICanino | IFelino;

// const animal: IDomestico ={
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terreste',
// }

//Tratando a tag input
// const input = document.getElementById('input') as HTMLInputElement; // para o TS identificar que é um elemento html, sem ele nao existe value por exemplo.

// input.addEventListener ('input', (event) =>{
//     const i = event.currentTarget as HTMLInputElement; // pegar o evento do input ao digitar
//     console.log(i.value);
// });

//Generics types:

// function adicionaApendiceALista<T>(array: any[], valor: T){
//     return array.map(item => item + valor);    
// }
// // Sem o tipo generecis <> a function interpreta tudo como any
// adicionaApendiceALista([1, 2, 3], 1); // INFERE QUE é tudo Number onde há o T
// adicionaApendiceALista(['a', 'b', 'c'], 'd'); // INFERE QUE é tudo String onde há o T

//Desenvolvendo condicionais a partir de parâmetros

// interface IUsuario{
//     id:string;
//     email: string;
// }

// interface IAdmin  extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'supervisor';

// }

// function reireciona(usuario: IUsuario | IAdmin){
//     if('cargo' in usuario){
//         //redirecionar para a área de administração
//     }

//     // redirecionar para a área de usuário
// }

// Utilizando o caracter "?" para variáveis opcionais

interface IUsuario{
    id:string;
    email: string;
    cargo?: 'funcionario' |'gerente' | 'coordenador' | 'supervisor';
}

function reireciona(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario cargo)
    }

    // redirecionar para a área de usuário
}

//Criando variáveis com propriedade readonly e private

interface Cachorro{
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

class MeuCachorro implements Cachorro{
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao);

