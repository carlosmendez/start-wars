import {
  StyledFilmContainer,
  StyleNavitationContainer,
  StyledButton
} from './styled-components';
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
      <StyledFilmContainer>
        <h3>{title}</h3>
        <p><small>Release date: </small>{releaseDate}</p>
        <p>Number of planets without water in the film: {numPlanetsNoWater}</p>
      </StyledFilmContainer>
      <StyleNavitationContainer>
        <StyledButton className={!hasPrevPage ? ButtonVisibilityEnum.HIDDEN : ''} onClick={prevPage}>Prev</StyledButton>
        <StyledButton className={!hasNextPage ? ButtonVisibilityEnum.HIDDEN : ''} onClick={nextPage}>Next</StyledButton>
      </StyleNavitationContainer>
    </>
  )
}

export { PersonFilms };
