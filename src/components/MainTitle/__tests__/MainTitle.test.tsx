import { render } from '@testing-library/react'
import { MainTitle } from "../MainTitle";

describe('MainTitle component', () => {
  const mockTitle = 'mock title';
  const h1Text = 'STAR WARS';
  test('renders correctly', () => {
    const {container, getByText} = render(
      <MainTitle>{mockTitle}</MainTitle>
    );
    expect(container).toMatchSnapshot();
    expect(getByText(h1Text)).toBeVisible();
    expect(getByText(mockTitle)).toBeVisible();
  });
});
