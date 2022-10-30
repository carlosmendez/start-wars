import React from 'react';
import { render } from '@testing-library/react'
import { Provider, CombinedError } from 'urql';
import { never, fromValue } from 'wonka';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "../HomePage";
import { mockPeople } from "../__mocks__/mocksPeople";

describe('Home Page component', () => {
  it('It renders correctly with response Success', () => {
    const successState = {
      executeQuery: () =>
        fromValue({
          data: {
            ...mockPeople
          }
        }),
    };
    const {container, getByText} = render(
      // @ts-ignore
      <Provider value={successState}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();

    expect(getByText('mockName1')).toBeVisible();
    expect(getByText('mockName2')).toBeVisible();
    const anchorElement1 = container.querySelector('a');
    expect(anchorElement1).toHaveAttribute(
      'href',
      '/person/mockId1',
    );
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
        <HomePage />
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
        <HomePage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
    expect(fetchingState.executeQuery).toBeCalledTimes(1);
  });
});
