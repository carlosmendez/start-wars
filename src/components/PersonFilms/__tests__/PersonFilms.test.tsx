import React from 'react';
import renderer from 'react-test-renderer';
import { PersonFilms } from "../PersonFilms";
import { mockFilms } from "../__mocks__/mocksFilm";

const props = {
  films: mockFilms
};

describe('PersonFilms component', () => {
  it('renders correctly', () => {
    const jsx = (
      // @ts-ignore
      <PersonFilms {...props} />
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
