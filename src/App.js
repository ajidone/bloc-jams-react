import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid>
        <Col xs={12} md={8}>
          <header>
            <nav>
             <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link>
             <Link to='/album'>Album</Link>
            </nav>
            <h1>Bloc Jams</h1>
          </header>
          </Col>
          <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
          </main>
        </Grid>
      </div>
    );
  }
}

export default App;
