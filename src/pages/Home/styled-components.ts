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
  
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px 0;
  text-align: center;
  margin: 8px;
`;
