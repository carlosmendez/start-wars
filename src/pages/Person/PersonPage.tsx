import React from 'react';
import { gql, useQuery } from "urql";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MainTitle } from "../../components/MainTitle";
import { Films } from "../../components/Films";

const personQuery = `
  query Query($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      species {
        averageHeight
      }
    }
  }
`;
const query = gql`${personQuery}`;

const PersonPage = () => {
  const { personId } = useParams();

  const queryObj = {
    query,
    variables: {
      personId
    },
  };

  const [result] = useQuery(queryObj);
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { name, birthYear, species } = data.person;
  const speciesAverageHeight = species?.averageHeight;

  return (
    <>
      <MainTitle>{name}</MainTitle>
      <h2>Birth year: {birthYear}</h2>
      <h2>List of producers the person has worked with and how many times.</h2>
      {speciesAverageHeight && <h2>Species average height: {speciesAverageHeight}</h2>}
      {personId && <Films personId={personId} />}
      <Link to="/"><button>Back</button></Link>
    </>
  );
};

export default PersonPage;
