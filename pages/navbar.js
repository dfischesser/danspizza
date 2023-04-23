import Nav from 'react-bootstrap/Nav';

export function Navbar() {

    return (
      <>
            <Nav variant="pills" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="menu" href="/menu">Menu</Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aboutus">About Us</Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
      </>
    )
  }