import { BrowserRouter, NavLink, Route, Switch, Prompt } from "react-router-dom";

import './App.css'

const Link = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

const ButtonBack = ({ history }) => (
  <button onClick={(e) => history.goBack()}>Voltar</button>
)

const ButtonForward = ({ history }) => (
  <button onClick={(e) => history.goForward()}>Próxima página</button>
)

function App() {
  return (
    <BrowserRouter>
        <div>
          <ul>
            <li>
              <Route component={ButtonBack} />
            </li>
            <li>
              <Route component={ButtonForward} />
            </li>
          </ul>
          <ul>
            <li><Link to='/' exact>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/cadastro'>Cadastro</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/(sobre|contato)' component={Page} />
            <Route path='/blog' component={Blog} />
            <Route path='/cadastro' component={Register} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

const Register = () => (
  <Prompt when={true} message='Navegação bloqueada!' />
)
const Error404 = () => (
  <h1>Página não encontrada</h1>
)

const Home = ({ match, location }) => (
  <div>
    {console.log('Home match:', match)}
    {console.log('Home location:', location)}
    <h1>Home</h1>
  </div>
)

const Page = ({ match, location }) => (
  <div>
    {console.log('Page location:', location)}
    <h1>{match.url}</h1>
  </div>
)

let blogMatch = null
const Blog = ({ match, location }) => (
  <div>
    {console.log('Blog match:', match)}
    {console.log('Blog location:', location)}
    <h1>Blog</h1>

    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
    </ul>

    <Switch>
      <Route exact path='/blog' render={(props) => <NoPosts numberOfPosts={2} {...props} />} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = ({ match, location }) => (
  <div>
    {console.log('Post404 match:', match, 'Post404 match é o mesmo do blog?', match === blogMatch)}
    {console.log('Location post', location)}
    <h1>Esse post não existe</h1>
  </div>
)

const Post = ({ match, location }) => (
  <div>
    {console.log('Post location:', location)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)


export default App;
