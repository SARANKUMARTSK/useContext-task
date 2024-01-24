import React from 'react'
import Product from './components/Product'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Context from './Utils/Context';
import { UserContext } from './Utils/Context';
import { useContext } from 'react';

function App() {

  return <>
  <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <FontAwesomeIcon style={{fontSize:"38px"}} icon={faApple} />{' '}
            <span style={{fontFamily:"monospace" , color:"red" , fontWeight:"bold"}}>Apple Store</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Context><Product /></Context>
  <Context />
   
  </>
}

export default App