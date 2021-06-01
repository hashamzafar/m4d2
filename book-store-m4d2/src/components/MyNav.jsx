import { Navbar, Nav } from 'react-bootstrap'

const MyNav = (props) => (
   
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">home</Nav.Link>
                <Nav.Link href="#pricing">books</Nav.Link>
                <Nav.Link href="#pricing">Find us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNav