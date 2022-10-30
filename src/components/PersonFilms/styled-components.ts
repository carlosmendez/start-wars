import styled from '@emotion/styled';
import { ButtonVisibilityEnum } from "./constants";
import { COLORS, BG_COLORS } from "../../utils/ui/constants";

export const StyledFilmContainer = styled.div`
  padding: 24px;
  background-color: ${BG_COLORS.SECONDARY};
  border-radius: 8px;
  margin-top: 16px;
  max-width: 400px;
`;

export const StyleNavitationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 350px;
  margin-top: 20px;
`;

export const StyledButton = styled.a`
  background-color: #FFF;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  padding: 10px 32px 7px;
  text-align: center;
  &:hover {
    background-color: ${COLORS.SECONDARY};
  }
  &.${ButtonVisibilityEnum.HIDDEN} {
    opacity: 0.3;
    pointer-events: none;
  }
`;
