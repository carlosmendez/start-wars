import React from 'react';
import {render} from "@testing-library/react";
import { PersonFilms } from "../PersonFilms";
import { mockFilms } from "../__mocks__/mocksFilm";

const props = {
  films: mockFilms
};

describe('PersonFilms component', () => {
  it('renders correctly', () => {
    const {container} = render(
      // @ts-ignore
      <PersonFilms {...props} />
    );
    expect(container).toMatchSnapshot();
  });
});
