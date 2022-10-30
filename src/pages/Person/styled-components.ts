import styled from '@emotion/styled';

export const StyledButton = styled.span`
  border: 1px solid rgb(255,228,0);
  border-radius: 4px;
  background-color: rgb(255, 228, 0);
  cursor: pointer;
  margin-top: 20px;
  padding: 4px 32px;
  text-align: center;
  > a {
    color: rgb(34, 34, 34);
    text-decoration: none;
  }
  &:hover {
    background-color: rgb(255, 243, 71);
  }
`;
