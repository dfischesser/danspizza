import { Navbar } from './navbar';
import Container from 'react-bootstrap/Container';

function Header({ title }) {
    return <h1 className="padding">{title ? title : 'Default title'}</h1>;
  }

export default function Menu(){
    return (
        <Container className="main">
          <Navbar />
          <Header title="Menu"/>
          <p>Hello World!</p>
          </Container>
    )
}