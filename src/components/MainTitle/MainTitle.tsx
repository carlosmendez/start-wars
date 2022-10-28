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
      {children}
    </StyledMainTitle>
  )
}

export { MainTitle };
