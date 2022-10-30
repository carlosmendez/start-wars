import React from 'react';
import renderer from 'react-test-renderer';
import { App } from "../App";

const MockChildren = () => <div>....mockChildrenComponent</div>;

describe('App component', () => {
  it('renders correctly', () => {
    const jsx = (
      <App>
        <MockChildren />
      </App>
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
