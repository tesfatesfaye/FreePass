import {useContext,MouseEvent} from "react";
import { DashboardContext } from "../context/DashboardContext";
import type { SecretCategoryTypes } from "../types/reactTypes/SecretCategoryTypes";

const useSidebarItem=()=>{
    
    const{updateCurrentModal}=useContext(DashboardContext)

    const toggle = (
      e: MouseEvent<SVGSVGElement>,
      modal: SecretCategoryTypes
    ) => {
      e.stopPropagation();
      updateCurrentModal(modal);
    };
    return {toggle}
}
export default useSidebarItem