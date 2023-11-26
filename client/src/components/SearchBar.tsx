import { CiSearch } from "react-icons/ci";
import useSearch from "../hooks/useSearch";
const SearchBar = () => {
    const { isSearching, toggleIsSearching,searchTerm,handleSearch } = useSearch();
  return (
    <div className="w-1/3 mx-auto relative flex items-center text-custom-gray">
      <CiSearch className="absolute left-1" size={18} />
      <input
        onFocus={toggleIsSearching}
        onBlur={toggleIsSearching}
        className={`w-full pl-6 py-1 rounded-md text-custom-gray bg-s-dark  ${
          isSearching ? "ring-2 ring-customGray text-white" : ""
        }`}
        type="text"
        placeholder={isSearching ? "" : "Search"}
        name="search"
        onChange={handleSearch}
        value={searchTerm}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;
