import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
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

const Sobre = () => (
  <h1>Sobre</h1>
)

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to="/blog/post-1">Post 1</Link></li>
      <li><Link to="/blog/post-2">Post 2</Link></li>
    </ul>

    <Route path="/blog/:post" component={Post} />
    <Route exact to="/blog" component={NoPost} />
  </div>
)

const Post = ({ match }) => (
  <h2>Post: {match.params.post}</h2>
)

const NoPost = () => (
  <h2>Selecione um post</h2>
)


export default App;
