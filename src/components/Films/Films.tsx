import usePersonFilms from "./hooks/usePersonFilms";
import { StyledButton } from './styled-components';

type FilmsProps = {
  personId: string,
};

const Films = ({
  personId,
}: FilmsProps) => {
  const {
    data,
    fetching,
    error,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
    numPlanetsNoWater,
  } = usePersonFilms({personId});

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const {title, releaseDate, planetConnection} = data.person.filmConnection.films[0];

  return (
    <>
      <h2>Films</h2>
      <p>{title}</p>
      <p>{releaseDate}</p>
      <p>Number of planets without water in the film: {numPlanetsNoWater}</p>

      {hasPrevPage && <StyledButton onClick={prevPage}>Prev</StyledButton> }
      {hasNextPage && <StyledButton onClick={nextPage}>Next</StyledButton> }
    </>
  )
}

export { Films };
