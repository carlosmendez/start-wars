import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { StyledMain } from "./styled-components";
import * as UI from '../../utils/ui/constants';

type AppProps = {
  children: ReactNode;
};

const GlobalStyles = () => <Global styles={css`
  ${emotionNormalize}
  body {
    font-family: ${UI.FONT_FAMILY};
    background-color: ${UI.BG_COLORS.MAIN};
    color: ${UI.COLORS.MAIN};
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
