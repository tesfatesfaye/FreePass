import { useState ,useEffect} from "react";

interface UseSecretReturnType {
  hoveredSecretItemId: string | null;
  updateHoveredSecretItemId: (id: string | null) => void;
  secretHeight: number;
}

const useSecret = ():UseSecretReturnType => {
  const [hoveredSecretItemId, setHoveredSecretItemId] = useState<string | null>(
    null
  );

  const updateHoveredSecretItemId = (id: string | null) => {
    setHoveredSecretItemId(id);
  };
 const [secretHeight, setSecretHeight] = useState(window.innerHeight - 48);
 useEffect(() => {
   const handleResize = () => {
     setSecretHeight(window.innerHeight - 48);
   };
   window.addEventListener("resize", handleResize);
   return () => {
     window.removeEventListener("resize", handleResize);
   };
 });

 return { hoveredSecretItemId, updateHoveredSecretItemId, secretHeight };

};


export default useSecret;
