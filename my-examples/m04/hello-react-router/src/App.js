import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import './App.css'

const LinkCustom = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><LinkCustom to="/" exact>Home</LinkCustom></li>
          <li><LinkCustom to="/sobre">Sobre</LinkCustom></li>
          <li><LinkCustom to="/contato">Contato</LinkCustom></li>
          <li><LinkCustom to="/blog">Blog</LinkCustom></li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/(sobre|contato)" component={Page} />
          <Route path="/blog" component={Blog} />
          <Route component={Error404} />
        </Switch>


      </div>

    </BrowserRouter>
  );
}

const Error404 = () => (
  <h1>Página não encotrada</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const Page = ({ match }) => (
  <h1>{match.url}</h1>
)

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><LinkCustom to="/blog/post-1">Post 1</LinkCustom></li>
      <li><LinkCustom to="/blog/post-2">Post 2</LinkCustom></li>
    </ul>

    <Switch>
      <Route exact to="/blog" render={ () => <NoPosts numberOfPost={2}/>} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = () => (
  <h1>Esse post não existe</h1>
)

const Post = ({match}) => (
  <div>
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ numberOfPost }) => (
  <h2>Selecione um dos {numberOfPost} post</h2>
)


export default App;
