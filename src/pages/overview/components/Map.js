// Semantic UI
import { Container } from "semantic-ui-react";

// Leaflet Map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
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
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>A sample popup.</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
