
//solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo2("gato"));

//solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

  for (let i = 0; i <string.length / 2; i++){ // pq verifica 2 caracteres ao mesmo tempo primeiro e ultimo, segundo e penultimo e assim sucessivamente.
    
    if(string[i] !== string[string.length -1 -i]){
        return false;
    }
  }
  return true;
}

console.log(verificaPalindromo2("abbba"));