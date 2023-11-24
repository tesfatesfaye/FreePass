import { useState } from "react";

const useSearch=()=>{
const [isSearching, setIsSearching] = useState <boolean>(false);
const [searchTerm, setSearchTerm] = useState<string>("");

const searchFocus = () => {
  setIsSearching(!isSearching);
};
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
}
return { isSearching, searchFocus, handleSearch,searchTerm};
    
}
export default useSearch;

