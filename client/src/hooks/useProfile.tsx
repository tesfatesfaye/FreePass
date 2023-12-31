import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { generateQuery } from "../services/graphql/queries";
import { GraphQLTypes } from "../types/graphqlTypes/graphQLtypes";

const useProfile = (id: string) => {
  const [user, setUser] = useState(null);
  const UserQuery = generateQuery(GraphQLTypes.User, ["id", "email"]);

  const { loading, error, data } = useQuery(UserQuery, {
    variables: { id: id },
  });
  useEffect(() => {
    const getUser = async () => {
      setUser(data?.user);
    };
    getUser();
  }, [data]);

  return { loading, error, data, user };
};

export default useProfile;
