import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from "emotion-reset";
import { StyledMain } from "./styled-components";

type AppProps = {
  children: ReactNode,
};

const GlobalStyles = () => <Global styles={css`
  ${emotionReset}
  body {
    color: #feda4a;
    background-color: #000;
    font-family: sans-serif;
  }
`}
/>;

const App = ({
 children,
}: AppProps) => {
  return (
    <>
      <GlobalStyles/>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export {App};
