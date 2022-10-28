import React from 'react';
import { gql, useQuery } from "urql";
import { MainTitle } from "../../components/MainTitle";
import { Card } from '../../components/Card';
import { StyledGridWrapper, StyledGrid, StyledGridItem } from "./styled-components";

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
        {data && data.allPeople.edges.map((item: any, index: number) => (
          <StyledGridItem key={index}>
            <Card key={item.node.id} title={item.node.name} />
          </StyledGridItem>
        ))}
      </StyledGrid>
    </>
  );
};

export default HomePage;
