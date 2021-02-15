import {
    Container, Jumbotron, Button,
    Navbar, Nav, Form, FormControl
  } from 'react-bootstrap';

  import {Link} from "react-router-dom"


export default function Home() {
    return (
        <Jumbotron>
            <h1>Flower App</h1>
            <p>
                Landing page...
            </p>
            <Link to="/register">
                <Button className="btn-secondary">Register</Button>
            </Link>
        </Jumbotron>
    )
}