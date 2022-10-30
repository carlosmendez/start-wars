import React from 'react';
import renderer from 'react-test-renderer';
import { MainTitle } from "../MainTitle";

describe('MainTitle component', () => {
  it('renders correctly', () => {
    const jsx = (
      <MainTitle>mockTitle</MainTitle>
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
