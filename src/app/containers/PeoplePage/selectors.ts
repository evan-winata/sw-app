import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.peoplePage || initialState;

export const selectPeople = createSelector(
  [selectDomain],
  peoplePageState => peoplePageState.peopleData,
);

export const selectFilms = createSelector(
  [selectDomain],
  peoplePageState => peoplePageState.films,
);

export const selectIsFetchingPeople = createSelector(
  [selectDomain],
  peoplePageState => peoplePageState.isFetchingPeopleAPI,
);

export const selectIsFetchingFilms = createSelector(
  [selectDomain],
  peoplePageState => peoplePageState.isFetchingFilmAPI,
);
