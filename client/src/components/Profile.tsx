// import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import useProfile from "../hooks/useProfile.tsx"
interface ProfileProps {
  name: string;
  email: string;
  picture?: string; 
}
const Profile: FC = () => {
  // const { user , isAuthenticated, isLoading } = useAuth0<ProfileProps>();
  const { user } = useProfile("1f605d6c-97d0-4281-885b-87d420eb3ddc");
  console.log("data",user?.email)
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <>
      {/* {data?.user?.email} */}

      {/* {isAuthenticated && user && ( */}
        <div>
          <div>{user?.email} </div>
                 </div>
      {/* )} */}
    </>
  );
};

export default Profile;
