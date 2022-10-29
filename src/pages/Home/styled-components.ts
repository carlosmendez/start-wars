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
  
  border: 1px solid #feda4a;;
  text-align: center;
  margin: 8px;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #feda4a;
  text-decoration: none;
  text-transform: uppercase;
  padding: 30px;
  &:hover {
    font-weight: bold;
    opacity: 0.5;
    background-color: #feda4a;
    color: #000;
  }
`;
