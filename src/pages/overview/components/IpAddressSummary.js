// React
import { useContext } from "react";

// Context
import { IpContext } from "../../../App";

// Semantic UI
import { Container, Header, Loader } from "semantic-ui-react";

// Components
import SummaryItem from "./SummaryItem";

const IpAddressSummary = () => {
  const ipInfo = useContext(IpContext);
  console.log(ipInfo);
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
      {ipInfo.ip ? (
        <>
          <SummaryItem title={"IP ADDRESS"} value={ipInfo.ip} />
          <SummaryItem
            title={"LOCATION"}
            value={ipInfo.location.city + ", " + ipInfo.location.region}
          />
          <SummaryItem title={"TIME ZONE"} value={ipInfo.location.timezone} />
          <SummaryItem title={"ISP"} value={ipInfo.isp} />
        </>
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader active inline={"centered"} />
        </div>
      )}
    </Container>
  );
};

export default IpAddressSummary;
