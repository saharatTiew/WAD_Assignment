import RegistrationForm from './RegistrationForm'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function Register() {
  return (

    <Container>
      <RegistrationForm />
    </Container>
//     <Container>
//       <h1>Member Registration</h1>
// <Container>
//   <Row>
//     <Col>Name</Col>
//     <Col><input type="text" name="name" /></Col>
//   </Row>
//   <Row>
//     <Col>Address</Col>
//     <Col><input type="text" name="address" /></Col>
//   </Row>  
//   <Row>
//     <Col>E-mail</Col>
//     <Col><input type="email" name="email" /></Col>
//   </Row>  
//   <Row>
//     <Col>Password</Col>
//     <Col><input type="password" name="password" /></Col>
//   </Row>  
//   <Row>
//     <Col>Confirmed Password</Col>
//     <Col><input type="password" name="password2" /></Col>
//   </Row>  

//   <Row>
//     <Col>Province</Col>
//     <Col>
//     <select name="province">
//       <option>Bangkok</option>
//       <option>Chon Buri</option>
//     </select>
//     </Col>
//   </Row>


//   <Row>
//     <Col>Amphur</Col>
//     <Col>
//     <select name="amphur">
//       <option>Prawet</option>
//       <option>Phrakanong</option>
//     </select>
//     </Col>
//   </Row>

//   <Button variant="outline-dark">Register</Button>

// </Container>
//     </Container>
  );
}
