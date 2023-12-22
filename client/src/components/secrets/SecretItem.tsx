import { FC } from "react"
import { TfiLayoutPlaceholder } from "react-icons/tfi";
const SecretItem:FC=(props:any)=>{   

    return (
      <div className="flex items-center gap-5 h-[70px] bg-p-dark border-b border-b-t-dark p-2 w-full cursor-pointer">
        <TfiLayoutPlaceholder className="ml-1"size={25} color={"white"} />
        <div className="flex flex-col gap-1 h-full mt-3">
          <p className="text-white">Login</p>
          <p className="text-custom-gray text-sm">tesfaget15@gmail.com</p>
        </div>
      </div>
    );

}

export default SecretItem;