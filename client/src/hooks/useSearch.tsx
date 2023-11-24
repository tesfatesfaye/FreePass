import { useState } from "react";

const useSearch=()=>{
const [isSearching, setIsSearching] = useState <boolean>(false);
const [searchTerm, setSearchTerm] = useState<string>("");

const toggleIsSearching = () => {
  setIsSearching(!isSearching);
};
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
}
return { isSearching, toggleIsSearching, handleSearch,searchTerm};
    
}
export default useSearch;

