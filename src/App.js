import Home from './Home';
import Header from './Header';
import Footer from './Footer';


import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
      <Router>
    <div className="App">
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/footer" >
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </div>
  </Router>
    );
}

export default App;
