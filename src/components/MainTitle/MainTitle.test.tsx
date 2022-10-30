import React from 'react';
import renderer from 'react-test-renderer';
import { MainTitle } from "./MainTitle";

const props = {
  name: "Star Wars characters"
};

describe('MainTitle component', () => {
  it('renders correctly', () => {
    const jsx = (
      <MainTitle {...props} />
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
