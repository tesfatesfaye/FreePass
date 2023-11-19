import { useQuery } from "@apollo/client";
import { generateQuery } from '../graphql/queries.js';
import { GraphQLTypes } from '../types/graphQLtypes.js';

const useProfile=(id:string)=>{
    const UserQuery = generateQuery(
        GraphQLTypes.User
        , ["id", "email"]
    );

    const { loading, error, data } = useQuery(UserQuery, {
        variables: { id:id}
    });
    

return {loading,error,data}

}

export default useProfile