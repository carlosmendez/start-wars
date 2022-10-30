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
    font-family: DIN, Helvetica, Arial, sans-serif;
    background-color: #151515;
    color: #FFF;
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
