// React
import { useEffect, useState, createContext } from "react";

// Axios
import axios from "axios";

// Component
import Overview from "./pages/overview";

// Context
export const IpContext = createContext(null);

function App() {
  // making get request to get an IP adress information on location

  const [ipInfo, setIpInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_B2BKi8JiO2uEplXOF6eHiBmK4SbPp"
      )
      .then((res) => {
        setIpInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <IpContext.Provider value={{ ipInfo, setIpInfo }}>
      <Overview />
    </IpContext.Provider>
  );
}

export default App;
