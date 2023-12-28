import {useContext,MouseEvent} from "react";
import { DashboardContext } from "../context/DashboardContext";

const useSidebarItem=()=>{
    
    const{updateCurrentModal}=useContext(DashboardContext)

    const toggle=(e:MouseEvent<SVGSVGElement>,modal:string|undefined)=>{
        e.stopPropagation()
        updateCurrentModal(modal)
    }
    return {toggle}
}
export default useSidebarItem