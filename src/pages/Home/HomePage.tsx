import React from 'react';
import useGetPeople from "../../utils/hooks/useGetPeople";
import { MainTitle } from "../../components/MainTitle";
import { StyledGrid, StyledGridItem, StyledLink } from "./styled-components";

const HomePage = () => {
  const {
    data,
    fetching,
    error
  } = useGetPeople();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const {allPeople} = data;
  const {edges} = allPeople;

  return (
    <>
      <MainTitle>People</MainTitle>
      <StyledGrid>
        {edges.map((item: AllPeopleNodeType, index: number) => (
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
