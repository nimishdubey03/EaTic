import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Mainheader from './components/Mainheader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <header>
        <Mainheader />
      </header>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/virtues">
        <Services />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
