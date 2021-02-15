import RegistrationForm from './RegistrationForm'
import Register from './Register'
// import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Pricing from './Pricing';

import {
  Container, Jumbotron, Button,
  Navbar, Nav, Form, FormControl
} from 'react-bootstrap'

function App() {
  return (
    <Router basename="routing-2">
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
             src="/flower.png"
             width="30"
             height="30"
             className="d-inline-block align-top"
            /> Flower
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <form inline>
          <FormControl type="text" paceholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </form>
        </Navbar>


        <Switch>
          <Route path="/register">
            <Register />
            <h1>Member Registration</h1>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Container>
    </Router>


    
  )
}



// export default function Register() {
//   return (

//     <Container>
//       {/* <RegistrationForm /> */}
//       < Registers />
//     </Container>
//   );
// }

export default App;
