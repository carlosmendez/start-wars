import { gql, useQuery } from "urql";
import { PEOPLE_QUERY } from "../constants";

interface UseGetPeopleReturn {
  data: AllPeopleType;
  fetching: boolean;
  error: ErrorType;
}

const query = gql`${PEOPLE_QUERY}`;

const useGetPeople = (): UseGetPeopleReturn => {
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  return <UseGetPeopleReturn>{
    data,
    fetching,
    error,
  };
};

export default useGetPeople;
