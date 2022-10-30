import React from 'react';
import renderer from 'react-test-renderer';
import { Provider, CombinedError } from 'urql';
import { never, fromValue } from 'wonka';
import {BrowserRouter as Router} from 'react-router-dom';
import PersonPage from "../PersonPage";
import { mockPerson } from '../__mocks__/mocks'

describe('Person Page component', () => {
  it('It renders correctly with response Success', () => {
    const successState = {
      executeQuery: () =>
        fromValue({
          data: {
            ...mockPerson
          }
        }),
    };

    const jsx = (
      <Provider value={successState}>
        <Router>
          <PersonPage />
        </Router>
      </Provider>
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it is fetching with Response error', () => {
    const errorState = {
      executeQuery: () =>
        fromValue({
          error: new CombinedError({
            networkError: Error('something went wrong!'),
          }),
        }),
    };

    const jsx = (
      <Provider value={errorState}>
        <PersonPage />
      </Provider>
    );
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it is calling fetch', () => {
    const fetchingState = {
      executeQuery: jest.fn(() => never),
    };
    const jsx = (
      <Provider value={fetchingState}>
        <PersonPage />
      </Provider>
    );
    renderer
      .create(jsx)
      .toJSON();

    expect(fetchingState.executeQuery).toBeCalledTimes(1);
  });

});
