import React, { ReactNode } from 'react';
import { StyledCard, StyledCardContent } from "./styled-components";

type CardProps = {
  title: string;
};

const Card = ({
  title = '',
}: CardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>{title}</StyledCardContent>
    </StyledCard>
  )
}

export { Card };
