import { FC } from "react";
import { TbFingerprintScan } from "react-icons/tb";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
const Navbar:FC = () => {
   const style={
    borderBottom:"1px solid rgb(50,50,50)"
  }
  return (
    <nav
      style={style}
      className="flex items-center justify-between flex-wrap p-2 py-2 bg-opacity-100 bg-p-dark"
    >
      <TbFingerprintScan color="white" size={30} />
      <SearchBar />
      <Avatar />
    </nav>
  );
};
export default Navbar;
