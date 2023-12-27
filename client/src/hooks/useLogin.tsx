import {useState} from 'react';


const useLogin = () => {   

    const [sso,setSso] = useState<boolean>(false);
    const toggleSso = () => setSso(!sso);


    return {sso,toggleSso}

}

export default useLogin;