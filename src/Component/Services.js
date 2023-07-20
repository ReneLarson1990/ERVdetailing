import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExteriorCard from "../Items/ExteriorCard";
import InteriorCard from "../Items/InteriorCard";
import ImgCarousel from "../Items/carousel";


export function Services() {
  return (
    <div>
      <h1>Service</h1>
      <h5>
        I provide comprehensive care for your vehicle, ensuring it looks and
        feels like new. Here's what my Exterior and Interior Detailing package
        includes:</h5>

        <Container>
      <Row>
      <h5>
        I provide comprehensive care for your vehicle, ensuring it looks and
        feels like new. Here's what my Exterior and Interior Detailing packages
        Might includes Depending on your needs.</h5>
        </Row>
        <Row>
        <Col>
          <ExteriorCard />
        </Col>
        <Col>
          <InteriorCard />
        </Col>
      </Row>
      <Row>
      <br></br>
          <h5>I take pride in my attention to detail, and I'll
        go the extra mile to ensure your vehicle is in pristine condition.
        Whether it's your daily driver or your prized possession, I treat every
        car with the utmost care and dedication to exceed your expectations.
        </h5>
        
      </Row>
      <br></br>
      <br></br>
      <Row>
        <ImgCarousel />
      </Row>
    </Container>
    </div>
  );
}


