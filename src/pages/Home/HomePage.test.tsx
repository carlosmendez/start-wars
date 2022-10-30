import React from 'react';
import renderer from 'react-test-renderer';
import { Provider, CombinedError } from 'urql';
import { never, fromValue } from 'wonka';
import HomePage from "./HomePage";
import {BrowserRouter as Router} from 'react-router-dom';
import allPeopleResponse from '../../../test/mocks/allPeopleResponse.json';

describe('Home Page component', () => {
  it('It renders correctly with response Success', () => {
    const successState = {
      executeQuery: () =>
        fromValue({
          data: {
            "allPeople": {
              "edges": [
                {
                  "node": {
                    "name": "Luke Skywalkexxr",
                    "id": "cGVvcGxlOjE=",
                    "species": 50
                  }
                },
                {
                  "node": {
                    "name": "C-3PO",
                    "id": "cGVvcGxlOjI=",
                    "species": {
                      "averageHeight": null
                    }
                  }
                }
              ]
            }
          }
        }),
    };

    const jsx = (
      <Provider value={successState}>
        <Router>
          <HomePage />
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
        <HomePage />
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
        <HomePage />
      </Provider>
    );
    renderer
      .create(jsx)
      .toJSON();

    expect(fetchingState.executeQuery).toBeCalledTimes(1);
  });

});
