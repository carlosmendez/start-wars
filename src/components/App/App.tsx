import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from "emotion-reset";
import { StyledMain } from "./styled-components";

type AppProps = {
  children: ReactNode,
};

const App = ({
  children,
}: AppProps) => {
  return (
    <>
      <Global styles={css`${emotionReset}`} />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}

export { App };
