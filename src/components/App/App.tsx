import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { StyledMain } from "./styled-components";

type AppProps = {
  children: ReactNode;
};

const GlobalStyles = () => <Global styles={css`
  ${emotionNormalize}
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

export { App };
