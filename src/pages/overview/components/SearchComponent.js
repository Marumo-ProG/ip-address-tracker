// React
import { useContext, useState } from "react";

// Axios
import axios from "axios";

// Context
import { IpContext } from "../../../App";

// Semantic UI
import { Input, Button } from "semantic-ui-react";

const SearchComponent = () => {
  const { setIpInfo, isLoading, setIsLoading } = useContext(IpContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_B2BKi8JiO2uEplXOF6eHiBmK4SbPp&ipAddress=" +
          searchValue
      )
      .then((res) => setIpInfo(res.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  };

  return (
    <>
      <Input
        action={
          <Button icon="search" onClick={handleSearch} loading={isLoading} />
        }
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for any IP address or domain"
        onSearch={() => console.log("searched")}
      />
    </>
  );
};

export default SearchComponent;
