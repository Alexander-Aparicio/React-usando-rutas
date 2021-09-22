import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Blogger } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { Error404 } from './pages/Error404';
import { Inicio } from './pages/Inicio';
import { Login } from './pages/Login';
import { Private } from './pages/PagePrivate';
// import { Nosotros } from './pages/Nosotros';
import { Productos } from './pages/Productos';
import { Tecnologias } from './pages/Tecnologias';
import { User } from './pages/Usuario';

function App() {
  return (
    <div> 
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/blog" component={Blogger}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/usuario/:username" component={User}/>
          {/* <Route exact path="/nosotros" component={Nosotros}/> */}
          <Route exact path="/nosotros">
          <Redirect to="/contacto"/>
          </Route>
          <Route path="/tecnologias" component={Tecnologias} />
          <Route exact path="/login" component={Login} />
          {/* <Route path="/privado" component={Private} /> */}
          <PrivateRoute exact path="/privado" component={Private} />
          <Route exact path="/*" component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
