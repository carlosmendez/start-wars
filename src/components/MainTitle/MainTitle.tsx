import React, { ReactNode } from 'react';
import { StyledMainTitle } from "./styled-components";

type MainTitleProps = {
  children: ReactNode;
};

const MainTitle = ({
  children,
}: MainTitleProps) => {
  return (
    <StyledMainTitle>
      <h1>STAR WARS</h1>
      {children}
    </StyledMainTitle>
  )
}

export { MainTitle };
