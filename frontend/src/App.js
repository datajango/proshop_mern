import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeView from './Views/HomeView';
import ProductView from './Views/ProductView';


const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact></Route>
          <Route path='/product/:id' component={ProductView}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
