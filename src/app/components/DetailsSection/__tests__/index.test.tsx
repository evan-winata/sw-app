import * as React from 'react';
import { render } from '@testing-library/react';

import { DetailsSection } from '..';

const renderDetailsSection = (
  props: Parameters<typeof DetailsSection>[number],
) => render(<DetailsSection {...props} />);

const mockProps = {
  name: 'Luke',
  birth_year: '41.9BBY',
  gender: 'Male',
  listOfFilms: ['Film 1', 'Film 2'],
  isFetchingFilms: false,
};

describe('<DetailsSection  />', () => {
  it('should match snapshot', () => {
    const detailsSectionComponent = renderDetailsSection({
      ...mockProps,
    });
    expect(detailsSectionComponent.container.firstChild).toMatchSnapshot();
  });

  it('should show loading symbol when fetching films data from API', () => {
    const detailsSectionComponent = renderDetailsSection({
      ...mockProps,
      isFetchingFilms: true,
    });
    expect(
      detailsSectionComponent.queryAllByTestId('svg-loading'),
    ).toHaveLength(1);
  });
  it('should not show loading symbol when films data is received and show the details instead', () => {
    const detailsSectionComponent = renderDetailsSection({
      ...mockProps,
    });
    expect(
      detailsSectionComponent.queryAllByTestId('svg-loading'),
    ).toHaveLength(0);
    expect(detailsSectionComponent.getAllByText(mockProps.name)).toHaveLength(
      1,
    );
    expect(
      detailsSectionComponent.getAllByText(mockProps.birth_year),
    ).toHaveLength(1);
    expect(detailsSectionComponent.getAllByText(mockProps.gender)).toHaveLength(
      1,
    );
    expect(
      detailsSectionComponent.getAllByText(mockProps.listOfFilms.join(', ')),
    ).toHaveLength(1);
  });
});
