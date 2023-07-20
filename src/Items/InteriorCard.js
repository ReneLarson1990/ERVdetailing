import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function InteriorCard() {
  return (
    <Card style={{ width: "37rem" }}>
      <Card.Img
        variant="top"
        src="/peter-broomfield-m3m-lnR90uM-unsplash.jpg"
        style={{ height: "35vh" }}
      />
      <Card.Body>
        <Card.Title>Interior Detailing</Card.Title>
        <Card.Text>
          Listed Below is a few of the service that you might include in your
          Interior package.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <h6>Thorough Vacuuming:</h6>
          Thorough Vacuuming: I leave no trace of dust or debris behind,
          thoroughly vacuuming carpets, floor mats, and upholstery.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Luxurious Leather Care:</h6>
          Leather surfaces are treated with care, cleaned, and conditioned to
          maintain their supple texture.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Refreshed Interior Components:</h6>
          Vinyl or plastic interior components are cleaned and dressed to look
          brand new.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Sanitized and Polished:</h6>
          The dashboard, center console, and door panels are sanitized and
          polished, giving your interior a fresh, clean look.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Stain and Odor Removal:</h6>
          Stubborn stains and unpleasant odors are banished from your car's
          interior, leaving it smelling fresh and clean.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Crystal Clear Glass:</h6>
          Interior glass surfaces are cleaned and polished, ensuring a
          streak-free view from every angle.
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default InteriorCard;
