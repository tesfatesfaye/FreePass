import {FC,useContext} from "react"
import { DashboardContext } from "../../../context/DashboardContext"
import useId from '../../../hooks/useID'
import TitleContainer from "../../../modals/UIcomponents/TitleContainer"
import TextArea from '../../../modals/UIcomponents/TextArea'
import AddTags from "../../../modals/UIcomponents/AddTags"
import Modal from "../../../modals/Modal"
const IDCard:FC =()=>{
      const { secretSelected, currentModal } = useContext(DashboardContext);
      const{idInputList}=useId()

        if(secretSelected!=="ID" && currentModal!=="ID") return null

        return (
            <Modal>
                    <TitleContainer type="ID"/>
                    <form className="secret-form">
                    {idInputList}
                    <TextArea/>
                    <AddTags/>

                    </form>

            </Modal>
        )
}

export default IDCard