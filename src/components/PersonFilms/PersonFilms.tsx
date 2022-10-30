import {StyleNavitationContainer, StyledButton} from './styled-components';
import usePagination from "../../utils/hooks/usePagination";
import { ButtonVisibilityEnum } from "./constants";

type PersonFilmsProps = {
  films: FilmType[];
};

interface PlanetType {
  surfaceWater: number | null;
}

const getNumPlanetsNoWater = (planets: PlanetType[]): number =>
  planets.filter((planet: PlanetType)  => !planet.surfaceWater).length;

const PersonFilms = ({
  films,
}: PersonFilmsProps) => {
  const totalFilms = films.length;
  const {
    currentPage,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination({
    total: totalFilms
  });
  const film = films[currentPage-1];
  const { title, releaseDate } = film;
  const { planetConnection } = film;
  const { planets } = planetConnection;
  const numPlanetsNoWater = getNumPlanetsNoWater(planets);
  return (
    <>
      <h2>Films</h2>
      <p>{title}</p>
      <p>{releaseDate}</p>
      <p>Number of planets without water in the film: {numPlanetsNoWater}</p>
      <StyleNavitationContainer>
        <StyledButton {...(!hasPrevPage && { visibility: ButtonVisibilityEnum.HIDDEN })} onClick={prevPage}>Prev</StyledButton>
        <StyledButton {...(!hasNextPage && { visibility: ButtonVisibilityEnum.HIDDEN })} onClick={nextPage}>Next</StyledButton>
      </StyleNavitationContainer>
    </>
  )
}

export { PersonFilms };
