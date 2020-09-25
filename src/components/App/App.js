import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home</h1>;
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;
const Error = () => <h1>Error</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact activeClassName="current">Start</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
