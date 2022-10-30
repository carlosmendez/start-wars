import React from 'react';
import {Link, useParams} from 'react-router-dom';
import useGetPersonFilms from "../../utils/hooks/useGetPersonFilms";
import {PersonFilms} from "../../components/PersonFilms";
import {MainTitle} from "../../components/MainTitle";
import {StyledButton} from "./styled-components";

const getCountProducers = (films: FilmType[]) => {
  const producers = films.map((item: FilmType) => item.producers).flat(1).sort();
  return producers.reduce((accumulator: Record<string, number>, value: string) => {
    return {...accumulator, [value]: (accumulator[value] || 0) + 1}
  }, {});
}

const PersonPage = () => {
  const { personId } = useParams();
  const {
    data,
    fetching,
    error,
  } = useGetPersonFilms({ personId });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const { person } = data;
  const { name, birthYear, species, filmConnection } = person;
  const averageHeight = species?.averageHeight;
  const { films } = filmConnection;
  const producers: Record<string, number> = getCountProducers(films);

  return (
    <>
      <MainTitle name={name} />
      <h2>Birth year: {birthYear}</h2>
      <h3>List of producers the person has worked with and how many times.</h3>
      <ul>
      { producers && Object.entries(producers).map(([key, value], index) => (
        <li key={index}>{key}: {value}</li>
      ))}
      </ul>
      {averageHeight && <h2>Species average height: {averageHeight}</h2>}
      { personId && <PersonFilms films={films} /> }
      <Link to="/"><StyledButton>Back</StyledButton></Link>
    </>
  );
};

export default PersonPage;
