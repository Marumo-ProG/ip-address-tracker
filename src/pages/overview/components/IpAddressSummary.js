// Semantic UI
import { Container, Header } from "semantic-ui-react";

const IpAddressSummary = () => {
  return (
    <Container
      fluid
      style={{
        height: 150,
        width: "80%",
        backgroundColor: "green",
        position: "absolute",
        top: 136,
      }}
    >
      <Header as={"h3"}>IP Address summary</Header>
    </Container>
  );
};

export default IpAddressSummary;
