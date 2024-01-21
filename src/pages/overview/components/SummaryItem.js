// Semantic UI
import { Header } from "semantic-ui-react";

const SummaryItem = ({ title, value }) => {
  return (
    <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      <Header as="h5" style={{ color: "#999", margin: 0 }}>
        {title}
      </Header>
      <Header as="h1" style={{ color: "black", margin: 0 }}>
        {value}
      </Header>
    </div>
  );
};

export default SummaryItem;
