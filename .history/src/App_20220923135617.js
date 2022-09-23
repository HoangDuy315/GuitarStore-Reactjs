import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Staff from './components/Staff';
import {Route, Redirect, Switch} from 'react-router-dom'
import Cart from './components/buttons/Cart';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Product}/>
        <Route exact path='/staff' component={Staff}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/cart' component={Cart}/>
        <Redirect to='/'/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
