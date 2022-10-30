import {Link} from "react-router-dom";
import styled from '@emotion/styled';

export const StyledGrid = styled.div`
  display: grid;
  grid-column: 2 / span 12;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 20px;
`;

export const StyledGridItem = styled.div`
  grid-column-end: span 12;
  @media only screen and (min-width: 480px) {
    grid-column-end: span 6;
  }
  @media only screen and (min-width: 768px) {
    grid-column-end: span 4;
  }
  background-color: #282727;
  border-radius: 8px;
  text-align: center;
  margin: 8px;
`;

export const StyledLink = styled(Link)`
  color: #DDD;
  display: block;
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 30px;
  &:hover {
    color: rgb(255, 228, 0);
  }
`;
