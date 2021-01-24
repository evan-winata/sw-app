import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { PeoplePage } from '..';
import { HelmetProvider } from 'react-helmet-async';

function* mockPeoplePageSaga() {}

jest.mock('../saga', () => ({
  peoplePageSaga: mockPeoplePageSaga,
}));

const renderPeoplePage = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <PeoplePage />
      </HelmetProvider>
    </Provider>,
  );

describe('<PeoplePage />', () => {
  let store: ReturnType<typeof configureAppStore>;
  let component: ReturnType<typeof renderPeoplePage>;

  beforeEach(() => {
    store = configureAppStore();
    component = renderPeoplePage(store);
  });
  afterEach(() => {
    component.unmount();
  });

  it('should display table component', () => {
    expect(component.container.querySelector('table')).toBeInTheDocument();
    expect(component.getAllByText('Height')).toHaveLength(1);
    expect(component.getAllByText('Mass')).toHaveLength(1);
  });

  it('should display details section component', () => {
    expect(component.getAllByText('Name')).toHaveLength(2);
    expect(component.getAllByText('Birth year')).toHaveLength(1);
    expect(component.getAllByText('Gender')).toHaveLength(1);
    expect(component.getAllByText('List of films')).toHaveLength(1);
  });
});
