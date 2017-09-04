import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import MdIconPack, {MdMenu} from 'react-icons/lib/md'
import {FaBars} from 'react-icons/lib/fa'
import styled from 'styled-components';
import Home from './components/Home';
import Test from './components/Test';

const Nav = styled.div`
  background-color: rgba(0,0,0,0);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 5vw;
  width: 100%;
  height: 0px;
    div{
      font-size: 2.55rem;
      font-family: 'Libre Franklin', sans-serif;
      margin: 0;
      svg{ margin-bottom: 5px; }
}`

const Footer = styled.p`
  background-color: rgba(0,0,0,.55);
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: .5vw;
  text-align: center;
  margin-bottom: 0;
  padding: 30px 1vw;
  border-top: 2px solid rgba(0,0,0,0);
    p{
      color: white;
      font-size: 1rem;
      margin: 0;
      svg{ margin-bottom: 5px; }
}`



class App extends Component {
  render() {
    return (
      <Router>
        <div>

        <Nav>
        <div><Link to="/"><img src='https://i.imgur.com/UJC52lF.png' className='logo-style'/></Link></div>
          <div></div>
          <div className='menu-container'>
            <span className='menu-text'>Menu</span>
            <Link to="/" className='menu-bar'><MdMenu /></Link>
          </div>
        </Nav>

        
          
          <Footer>
            <p>© 2017 by Richard Kim</p>
          </Footer>

          <Route exact path="/" component={Home} /> 
          <Route exact path="/test" component={Test} /> 
        </div>
      </Router>
    );
  }
}

export default App;
