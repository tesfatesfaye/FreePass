import { FC } from "react";
import MainIcon from "../icons/IconComponent";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 py-2 bg-p-dark border-b border-b-t-dark">
      <button>
        <MainIcon
          type="MainIcon"
          className="cursor-pointer text-white"
          size={30}
        />
      </button>
      <SearchBar />
      <Avatar />
    </nav>
  );
};
export default Navbar;
