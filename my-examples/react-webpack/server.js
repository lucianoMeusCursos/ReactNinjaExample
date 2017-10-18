'use strict'

const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server'); // Criamos um construtor para criarmos um novo servidor
const config = require('./webpack.config'); //Lembrando que o . aqui é por conta que estamos na raiz

// Criando o servidor
new WebPackDevServer(webpack(config),{
  publicPath: config.output.publicPath, // pegando do obj config
  hot: true, // para fazer o hot loader corretamente
  historyApiFallback: true, // Precisamos colocar como true quando quisermos assistir outra url criada manualmente.
  stats: { colors: true } // saida colorida

}).listen(3000, (err) => {
  // Cirando a porta

  if(err){
    return console.log(err);
  }

  console.log('Listening on http://localhost:3000');
})
