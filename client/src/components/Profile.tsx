import { FC } from "react";
// import useProfile from "../hooks/useProfile.tsx";
import Navbar from "./Navbar.tsx";
import { DashboardContextProvider } from "../context/DashboardContext.tsx";
import DashBoard from "./Dashboard.tsx";
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
