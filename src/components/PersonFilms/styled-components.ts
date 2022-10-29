import { ReactNode } from 'react';
import styled from '@emotion/styled';

export const StyleNavitationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  margin-top: 40px;
`;

// TODO: fix any ...
export const StyledButton = styled.button<any>(props => ({
  height: '40px',
  minWidth: '100px',
  visibility: props.visibility
}));
