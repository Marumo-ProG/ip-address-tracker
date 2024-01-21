// React

// Semantic UI
import { Container, Header } from "semantic-ui-react";

// Components
import SearchComponent from "./components/SearchComponent";
import IpAddressSummary from "./components/IpAddressSummary";
import Map from "./components/Map";

const Overview = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Container
        fluid
        style={{
          backgroundColor: "#999",
          height: 200,
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          paddingTop: "16px",
          overflow: "visible",
          position: "relative",
        }}
      >
        <Header as="h2" style={{ color: "white" }}>
          IP Adress Tracker
        </Header>
        <SearchComponent />
        <IpAddressSummary />
      </Container>
      <Map />
    </Container>
  );
};

export default Overview;
