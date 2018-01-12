'use strict'


// const pagination = ({ total, activePage }) => {

//   return Array.apply(null, { length: total }).map((_, i) => i + 1) //HACK EM ES5 - array em js são objetos, quando passamos o objeto length dessa forma para um array ele vai entender que você vai criar um array com essa quantidade de objeto
//   // aqui .map((_, i) => i + 1) estamos iterando pelos os elementos undefined que no caso é o _ no método map e estamos retornado como itens do array o item + 1 sendo assim seria o resultado [1, 2]
// }


const pagination = ({ total, activePage }) => {

  return Array.from({ length: total }, (_, i) => i + 1) //ele pega os iterators ou os array like e cria itens de um array
  // o primeiro parâmetro é o array like e o segundo é um método map já implementado que podemos iterar
}




export default pagination
