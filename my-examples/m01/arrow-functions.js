// Explicação arro-functions
console.log('Arrow functions')

// Podemos declara funções das seguintes maneiras

// //Literais
// function sum (x, y) {
//   return x + y
// }

// // Expressões
// var sum = function sum(x, y){
//   return x + y
// }

// Arrow function sempre será uma função anônima. Você não precisa da palavra function e os parênteses não precisam ser passados caso vc não tenha argumentos na função. Arrow functions devem ser atribuidas a uma váriavel por conta da sintaxe e de serem anônimas.

var sum = (x, y) => {
  return x + y
}

// Quando só temos um único valor na arrow function ou return podemos abreviar, dessa forma não precisamos de return pois na arrow function tudo que está após a seta e que só tenha um único valor pode ser escrito da forma abaixo que é retornado

var sum = (x, y) => x + y;

// Quando só temos um parâmetro o parentes não é obrigatório

var add1 = x => sum(x, 1);

// A vantagem real das arrow functions é quando vc tem um escopo léxico.

// Para ver aplicação do escopo vá para reactExample e acesse o m01/learning-state

console.log('retorno sum', sum(1, 2))
console.log('retorno add1', add1(5))
