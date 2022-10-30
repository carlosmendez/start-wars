import React from 'react';
import {render} from "@testing-library/react";
import { Provider, CombinedError } from 'urql';
import { never, fromValue } from 'wonka';
import {BrowserRouter as Router} from 'react-router-dom';
import PersonPage from "../PersonPage";
import { mockPerson } from '../__mocks__/mocksPerson';

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
    const {container} = render(
      // @ts-ignore
      <Provider value={successState}>
        <Router>
          <PersonPage />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
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
    const {container} = render(
      // @ts-ignore
      <Provider value={errorState}>
        <PersonPage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('it is calling fetch', () => {
    const fetchingState = {
      executeQuery: jest.fn(() => never),
    };
    const {container} = render(
      // @ts-ignore
      <Provider value={fetchingState}>
        <PersonPage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
    expect(fetchingState.executeQuery).toBeCalledTimes(1);
  });

});
