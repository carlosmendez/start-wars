import React, { ReactNode } from 'react';
import { StyledMainTitle } from "./styled-components";

type MainTitleProps = {
  name: string;
};

const MainTitle = ({
  name,
}: MainTitleProps) => {
  return (
    <StyledMainTitle>
      {name}
    </StyledMainTitle>
  )
}

export { MainTitle };
