import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "react-bootstrap/Nav";
import { useState } from "react"; // Import the useState hook
import { useLocation } from "react-router-dom"; // Import the useLocation hook

function NavBar() {
  const location = useLocation(); // Get the current location using the useLocation hook
  const [activeKey, setActiveKey] = useState(location.pathname); // Set initial active key to the current location

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey); // Update the active key when a navigation item is selected
  };

  return (
    <div className="navbar">
      <Nav variant="pills"  onSelect={handleSelect} justify="center">
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services" eventKey="/services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" eventKey="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
