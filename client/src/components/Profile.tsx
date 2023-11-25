import { FC } from "react";
import useProfile from "../hooks/useProfile.tsx";
import Navbar from "./Navbar.tsx";
import SideBar from "./SideBar.tsx";
const Profile: FC = () => {
  const { user } = useProfile("1f605d6c-97d0-4281-885b-87d420eb3ddc");
  console.log(user);
  return (
    <div className="profile dark">
      <Navbar />
      <SideBar />
       </div>
  );
};

export default Profile;
