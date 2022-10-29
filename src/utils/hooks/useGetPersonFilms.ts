import { gql, TypedDocumentNode, useQuery } from "urql";
import { PERSON_FILMS_QUERY } from "../constants";

interface UsePersonFilmsProps {
  personId: string | undefined;
}

interface UsePersonFilmsReturn {
  data: PersonType;
  fetching: boolean;
  error: ErrorType,
}

interface Variables {
  variables: {
    personId: string | undefined;
    first?: number;
    last?: number;
    after?: string;
    before?: string;
  }
}

interface QueryObj extends Variables {
  query: TypedDocumentNode<any, object>
}

const query = gql`${PERSON_FILMS_QUERY}`;

const useGetPersonFilms = ({
  personId,
}: UsePersonFilmsProps): UsePersonFilmsReturn => {
  const queryObj: QueryObj = {
    query,
    variables: {
      personId,
    },
  };
  const [result] = useQuery(queryObj);
  const { data, fetching, error } = result;

  return <UsePersonFilmsReturn>{
    data,
    fetching,
    error,
  };
};

export default useGetPersonFilms;
