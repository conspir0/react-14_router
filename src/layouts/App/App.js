import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './../Header/Header';
import Nav from './../Nav/Nav';
import Section from './../Section/Section';
import Footer from './../Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Header />
          </header>
          <main>
            <nav>
              <Nav />
            </nav>
            <section>
              <Section />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
