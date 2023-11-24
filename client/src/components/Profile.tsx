import { FC } from "react";
import useProfile from "../hooks/useProfile.tsx";
import Navbar from "./Navbar.tsx";
const Profile: FC = () => {
  const { user } = useProfile("1f605d6c-97d0-4281-885b-87d420eb3ddc");
  console.log(user);
  return (
    <div className="Dark">
      <Navbar />
    </div>
  );
};

export default Profile;
