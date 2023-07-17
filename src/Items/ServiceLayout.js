import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

function serviceLayout() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Single Service</h2>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col>
          <h2>Monthly Service</h2>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/peter-broomfield-m3m-lnR90uM-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/deniz-demirci-4mUNFO4Kjyk-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/neelabh-raj-cw1914zDHUs-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>
    </Container>
  );
}

export default serviceLayout;
