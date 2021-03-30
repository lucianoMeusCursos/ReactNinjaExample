import React, { Suspense } from 'react';

import './App.css';

const Img = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./img'))
    }, 5000)
  })
})

const P = React.lazy(() => import('./p'))
const A = React.lazy(() => import('./a'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<h1>CARREGANDO...</h1>}>
          <Img />
        </Suspense>
        <Suspense fallback={<h1>Aqui é o P E a</h1>}>
          <P />
          <A />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
