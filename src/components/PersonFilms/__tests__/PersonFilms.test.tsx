import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PersonFilms } from "../PersonFilms";
import { mockFilms } from "../__mocks__/mocksFilm";

const props = {
  films: mockFilms
};

describe('PersonFilms component', () => {
  it('renders correctly', () => {
    const {container, getByText} = render(
      // @ts-ignore
      <PersonFilms {...props} />
    );
    expect(container).toMatchSnapshot();
    expect(getByText('mockFilm1')).toBeVisible();
    expect(getByText('Release date:')).toBeVisible();
    expect(getByText('mockReleaseDate1')).toBeVisible();
  });

  it('Should paginate Films, forward and backward', async() => {
    render(
      // @ts-ignore
      <PersonFilms {...props} />
    );
    const nextButton = screen.getByTestId('films-next');
    const prevButton = screen.getByTestId('films-prev');

    await userEvent.click(nextButton);
    expect(screen.getByText('mockFilm2')).toBeVisible();
    expect(screen.getByText('mockReleaseDate2')).toBeVisible();

    await userEvent.click(nextButton);
    expect(screen.getByText('mockFilm3')).toBeVisible();
    expect(screen.getByText('mockReleaseDate3')).toBeVisible();

    await userEvent.click(prevButton);
    expect(screen.getByText('mockFilm2')).toBeVisible();
    expect(screen.getByText('mockReleaseDate2')).toBeVisible();
  });
});
