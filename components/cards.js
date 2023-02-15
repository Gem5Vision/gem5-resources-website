import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MyCards() {
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  };

  const cardStyle = {
    width: "calc(100% / 3 - 1rem)",
    marginBottom: "1rem",
  };

  const headerStyle = {
    marginTop: "50%",
    fontSize: "2rem",
    fontWeight: "bold",
    marginRight: "2rem",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div style={headerStyle}>My Awesome Cards</div>
      </div>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is the first card.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              This is the second card.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              This is the third card.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
