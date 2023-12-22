import { FC } from "react";
// import useProfile from "../hooks/useProfile.tsx";
import { DashboardContextProvider } from "../context/DashboardContext.tsx";
import Navbar from "./navbar/Navbar.tsx";
import DashBoard from "./secrets/Dashboard.tsx";
const Profile: FC = () => {
  // const { user } = useProfile("1f605d6c-97d0-4281-885b-87d420eb3ddc");

  return (
    <div className="profile dark">
      <DashboardContextProvider>
        <Navbar />
        <DashBoard />
      </DashboardContextProvider>
    </div>
  );
};

export default Profile;
