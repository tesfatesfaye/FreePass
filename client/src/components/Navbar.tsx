import { TbFingerprintScan } from "react-icons/tb";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
const Navbar = () => {
  const style={
    backgroundColor:"rgb(54,54,54)",
    borderBottom:"1px solid rgb(40,40,40)"
  }
  return (
    <nav
      style={style}
      className="flex items-center justify-between flex-wrap p-2 py-3 bg-opacity-100"
    >
      <TbFingerprintScan color="white" size={30} />
      <SearchBar />
      <Avatar />
    </nav>
  );
};
export default Navbar;
