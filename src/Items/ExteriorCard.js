import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ExteriorCard() {
  return (
    <Card style={{ width: "37rem" }}>
      <Card.Img
        variant="top"
        src="/deniz-demirci-4mUNFO4Kjyk-unsplash.jpg"
        style={{ height: "35vh" }}
      />
      <Card.Body>
        <Card.Title>Exterior Detailing</Card.Title>
        <Card.Text>
          Listed Below is a few of the service that you might include in your
          Exterior package.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <h6>Thorough Washing:</h6>I start by giving your car a meticulous hand
          wash to remove all dirt, grime, and debris, leaving its exterior
          shining.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Wheel and Tire Care:</h6>
          Your wheels, rims, and tires will receive special attention with a
          deep cleaning and degreasing to make them look their best.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Paint Protection:</h6>I apply premium wax or sealant to shield
          your car's paint from the elements and give it that stunning showroom
          shine.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Paint Restoration:</h6>
          My polishing and buffing techniques work wonders in removing surface
          imperfections, ensuring your paint looks flawless.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Trim and Molding Restoration:</h6>
          Faded or worn exterior trim and moldings will be revitalized, bringing
          back their original luster.
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Window and Mirror Treatment:</h6>I pay close attention to your
          windows and mirrors, ensuring they're streak-free and crystal clear.
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ExteriorCard;
