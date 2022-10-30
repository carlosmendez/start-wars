import React from 'react';
import {Link, useParams} from 'react-router-dom';
import useGetPersonFilms from "../../utils/hooks/useGetPersonFilms";
import {PersonFilms} from "../../components/PersonFilms";
import {MainTitle} from "../../components/MainTitle";
import {StyledButton} from "./styled-components";

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

  return (
    <>
      <MainTitle name={name} />
      <h2>Birth year: {birthYear}</h2>
      <h2>List of producers the person has worked with and how many times.</h2>
      {averageHeight && <h2>Species average height: {averageHeight}</h2>}

      { personId && <PersonFilms films={films} /> }
      <Link to="/"><StyledButton>Back</StyledButton></Link>
    </>
  );
};

export default PersonPage;
