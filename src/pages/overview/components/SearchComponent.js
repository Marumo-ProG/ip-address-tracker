// Semantic UI
import { Input } from "semantic-ui-react";

const SearchComponent = () => {
  return (
    <>
      <Input
        action={{ icon: "search" }}
        placeholder="Search for any IP address or domain"
      />
    </>
  );
};

export default SearchComponent;
