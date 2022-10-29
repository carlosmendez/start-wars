import React from 'react';
import { gql, useQuery } from "urql";
import { MainTitle } from "../../components/MainTitle";
import { StyledGrid, StyledGridItem, StyledLink } from "./styled-components";

const query = gql`
  query Home {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const HomePage = () => {
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <MainTitle>People</MainTitle>
      <StyledGrid>
        {/*TODO: add types to 'item'*/}
        {data && data.allPeople.edges.map((item: any, index: number) => (
          <StyledGridItem key={index}>
            <StyledLink to={`/person/${item.node.id}`}>
              {item.node.name}
            </StyledLink>
          </StyledGridItem>
        ))}
      </StyledGrid>
    </>
  );
};

export default HomePage;
