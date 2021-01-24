import * as React from 'react';
import { render } from '@testing-library/react';

import { Table } from '..';

const renderTable = (props: Parameters<typeof Table>[number]) =>
  render(<Table {...props} />);

const mockData = {
  count: 82,
  next: 'http://swapi.dev/api/people/?page=3',
  previous: 'http://swapi.dev/api/people/?page=1',
  results: [
    {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      created: '2014-12-10T16:20:44.310000Z',
      edited: '2014-12-20T21:17:50.327000Z',
      url: 'http://swapi.dev/api/people/11/',
    },
  ],
};

describe('<Table  />', () => {
  it('should match the snapshot', () => {
    const tableComponent = renderTable({
      title: 'People',
      data: mockData,
      handleSetDetail: () => {},
      handlePageChange: () => {},
      isFetchingPeople: false,
    });
    expect(tableComponent.container.firstChild).toMatchSnapshot();
  });

  it('should show Loading icon when loading', () => {
    const tableComponent = renderTable({
      title: 'People',
      data: mockData,
      handleSetDetail: () => {},
      handlePageChange: () => {},
      isFetchingPeople: true,
    });
    expect(tableComponent.queryAllByTestId('svg-loading')).toHaveLength(1);
  });

  it('should not show loading icon when data received, but show the data in table', () => {
    const tableComponent = renderTable({
      title: 'People',
      data: mockData,
      handleSetDetail: () => {},
      handlePageChange: () => {},
      isFetchingPeople: false,
    });
    expect(tableComponent.queryAllByTestId('svg-loading')).toHaveLength(0);
    expect(tableComponent.getAllByText(mockData.results[0].name)).toHaveLength(
      1,
    );
    expect(tableComponent.getAllByText(mockData.results[0].mass)).toHaveLength(
      1,
    );
    expect(
      tableComponent.getAllByText(mockData.results[0].height),
    ).toHaveLength(1);
  });
});
