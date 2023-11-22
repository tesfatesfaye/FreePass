import { FC } from "react";
import useProfile from "../hooks/useProfile.tsx"
const Profile: FC = () => {
 const { user } = useProfile("1f605d6c-97d0-4281-885b-87d420eb3ddc");
 console.log(user);
  return (
    <>
     
    </>
  );
};

export default Profile;
