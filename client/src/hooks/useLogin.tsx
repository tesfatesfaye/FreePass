import {useState} from 'react';
import ModalInput from '../modals/UIcomponents/ModalInput';
import { v4 } from 'uuid';
const useLogin = () => {   

    const [sso,setSso] = useState<boolean>(false);
    const toggleSso = () => setSso(!sso);
    const loginInputs = [
      { id: v4(), type: "text", placeholder: "username", name: "username" },
      {
        id: v4(),
        type: "email",
        placeholder: "email",
        name: "abc@example.com",
      },
      { id: v4(), type: "password", placeholder: "password", name: "password" },
      { id: v4(), type: "url", placeholder: "http://google.com", name: "url" },
    ];

    const loginInputsList=loginInputs.map((input)=>{
        return <ModalInput key={input.id} type={input.type} placeholder={input.placeholder} name={input.name} />
    
    })

    return {sso,toggleSso,loginInputsList}

}

export default useLogin;