// Semantic UI
import { Container, Header } from "semantic-ui-react";

// Components
import SummaryItem from "./SummaryItem";

const IpAddressSummary = () => {
  return (
    <Container
      fluid
      style={{
        height: 125,
        width: "80%",
        backgroundColor: "white",
        position: "absolute",
        top: 136,
        borderRadius: "20px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000,
        boxShadow: "3px 3px 5px  #999",
      }}
    >
      <SummaryItem title={"IP ADDRESS"} value={"192.186.1.8"} />
      <SummaryItem title={"LOCATION"} value={"227 Minnar Street, Central"} />
      <SummaryItem title={"TIME ZONE"} value={"SAT Cape Town"} />
      <SummaryItem title={"ISP"} value={"MTN South Africa"} />
    </Container>
  );
};

export default IpAddressSummary;
