import * as selectors from '../selectors';
import { RootState } from 'types';
import { initialState } from '../slice';

describe('PeoplePage selectors', () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it('should select people state', () => {
    expect(selectors.selectPeople(state)).toEqual(initialState.peopleData);
  });

  it('should select films state', () => {
    expect(selectors.selectFilms(state)).toEqual(initialState.films);
  });

  it('should select is fetching people API state', () => {
    expect(selectors.selectIsFetchingPeople(state)).toEqual(
      initialState.isFetchingPeopleAPI,
    );
  });

  it('should select is fetching film API state', () => {
    expect(selectors.selectIsFetchingFilms(state)).toEqual(
      initialState.isFetchingFilmAPI,
    );
  });
});
