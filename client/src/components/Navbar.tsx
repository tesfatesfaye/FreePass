import { FC } from "react";
import { TbFingerprintScan } from "react-icons/tb";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 py-2 bg-opacity-100 bg-p-dark border-b border-b-t-dark">
      <TbFingerprintScan color="white" size={30} />
      <SearchBar />
      <Avatar />
    </nav>
  );
};
export default Navbar;
