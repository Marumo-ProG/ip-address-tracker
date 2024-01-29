// React
import { useContext } from "react";

// Context
import { IpContext } from "../../../App";

// Semantic UI
import { Container, Loader } from "semantic-ui-react";

// Leaflet Map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const { ipInfo } = useContext(IpContext);
  return (
    <Container
      fluid
      id="map"
      style={{
        backgroundColor: "red",
        height: "calc(100vh - 200px)",
        zIndex: 0,
      }}
    >
      {ipInfo.ip ? (
        <MapContainer
          center={[ipInfo.location.lat, ipInfo.location.lng]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}>
            <Popup>A sample popup.</Popup>
          </Marker>
        </MapContainer>
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

export default Map;
