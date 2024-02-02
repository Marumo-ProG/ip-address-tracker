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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_B2BKi8JiO2uEplXOF6eHiBmK4SbPp"
      )
      .then((res) => {
        setIpInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("ip changed");
  }, [ipInfo]);
  return (
    <IpContext.Provider value={{ ipInfo, setIpInfo, isLoading, setIsLoading }}>
      <Overview />
    </IpContext.Provider>
  );
}

export default App;
