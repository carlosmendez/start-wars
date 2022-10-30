import styled from '@emotion/styled';
import { ButtonVisibilityEnum } from "./constants";

export const StyledFilmContainer = styled.div`
  padding: 24px;
  background-color: #282727;
  border-radius: 8px;
  margin-top: 16px;
  max-width: 400px;
`;

export const StyleNavitationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 350px;
  margin-top: 40px;
`;

export const StyledButton = styled.a`
  background-color: #000;
  border: 1px solid #FFF;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 32px 7px;
  text-align: center;
  &:hover {
    background-color: #242424;
  }
  &.${ButtonVisibilityEnum.HIDDEN} {
    visibility: ${ButtonVisibilityEnum.HIDDEN};    
  }
`;
