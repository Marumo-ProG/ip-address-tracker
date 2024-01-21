// Semantic UI
import { Container, Header } from "semantic-ui-react";

const Overview = () => {
  return (
    <Container fluid>
      <Container
        fluid
        style={{
          backgroundColor: "#999",
          height: 300,
          display: "flex",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <Header as="h2" style={{ color: "white" }}>
          IP Adress Tracker
        </Header>
      </Container>
    </Container>
  );
};

export default Overview;
