import React from 'react';
import renderer from 'react-test-renderer';
import { PersonFilms } from "../PersonFilms";
import { mockFilms } from "../__mocks__/mocks";

const props = {
  films: mockFilms
};

describe('PersonFilms component', () => {
  it('renders correctly', () => {
    const jsx = (
      <PersonFilms {...props} />
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
