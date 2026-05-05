import ProviderSearchResults from "../../components/ProviderSearchResults";
import Cta from "../../components/Cta";
import data from "./data.json";

function Search() {
  return (
    <>
      <ProviderSearchResults content={data} />
      <Cta />
    </>
  );
}

export default Search;
