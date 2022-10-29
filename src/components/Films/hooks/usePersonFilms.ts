import { useState } from 'react';
import {gql, TypedDocumentNode, useQuery, UseQueryArgs} from "urql";
import { personFilmsQuery } from "../contants";

const query = gql`${personFilmsQuery}`;

interface UsePersonFilmsProps {
  personId: string;
}

interface UsePersonFilmsReturn {
  data: any; // TODO
  fetching: boolean;
  error: any; // TODO
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: () => void;
  prevPage: () => void;
  numPlanetsNoWater: number;
}

interface PlanetType {
  surfaceWater: number | null;
  __typename: string;
}

interface Variables {
  variables: {
    personId: string;
    first?: number;
    last?: number;
    after?: string;
    before?: string;
  }
}

interface PageStatus extends Variables{
  currentPage: number;
}

interface QueryObj extends Variables {
  query: TypedDocumentNode<any, object>
}

const getNumPlanetsNoWater = (planets: PlanetType[]) => planets.filter((planet: PlanetType)  => !planet).length;

const usePersonFilms = ({
  personId,
}: UsePersonFilmsProps): UsePersonFilmsReturn => {
  const defaultPageStatus: PageStatus = {
    currentPage: 1,
    variables: {
      personId,
      first: 1,
    }
  };
  const [pageStatus, setPageStatus] = useState(defaultPageStatus);

  const queryObj: QueryObj = {
    query,
    variables: {
      ...pageStatus.variables,
    },
  };

  const [result] = useQuery(queryObj);
  const { data, fetching, error } = result;

  const startCursor = data ? data.person.filmConnection.pageInfo.startCursor : '';
  const totalCount = data ? data.person.filmConnection.totalCount : 0;
  const { currentPage } = pageStatus;
  const numPlanetsNoWater = data ?
    getNumPlanetsNoWater(data.person.filmConnection.films[0].planetConnection.planets) :
    null;

  const nextPage = () => {
    setPageStatus({
      currentPage: currentPage + 1,
      variables: {
        personId,
        first: 1,
        after: startCursor,
      },
    });
  };
  const prevPage = () => {
    setPageStatus({
      currentPage: currentPage -1,
      variables: {
        personId,
        last: 1,
        before: startCursor,
      },
    });
  };

  return <UsePersonFilmsReturn>{
    data,
    fetching,
    error,
    hasPrevPage: currentPage > 1,
    hasNextPage: currentPage < totalCount,
    nextPage: () => nextPage(),
    prevPage: () => prevPage(),
    numPlanetsNoWater,
  };
};

export default usePersonFilms;
