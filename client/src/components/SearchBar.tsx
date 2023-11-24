import { CiSearch } from "react-icons/ci";
import useSearch from "../hooks/useSearch";
const SearchBar = () => {
    const { isSearching, searchFocus,searchTerm,handleSearch } = useSearch();
  return (
    <div className="w-1/3 mx-auto relative flex items-center">
      <CiSearch
        className="absolute bottom-0.5 left-1"
        color="black"
        size={18}
      />
      <input
        onFocus={searchFocus}
        onBlur={searchFocus}
        className={`w-full pl-6 rounded-md ${isSearching ? "border-pbcd" : ""}`}
        type="text"
        placeholder={isSearching ? "" : "Search"}
        name="search"
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
