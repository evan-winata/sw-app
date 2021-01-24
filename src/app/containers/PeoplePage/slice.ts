import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, PeopleData, Film } from './types';

// The initial state of the PeoplePage container
export const initialState: ContainerState = {
  peopleData: {
    count: 0,
    results: [],
  },
  films: [],
  isFetchingPeopleAPI: false,
  isFetchingFilmAPI: false,
};

const peoplePageSlice = createSlice({
  name: 'peoplePage',
  initialState,
  reducers: {
    getPeople(state, action: PayloadAction<number>) {},
    setPeople(state, action: PayloadAction<PeopleData>) {
      state.peopleData = action.payload;
    },
    getFilms(state, action: PayloadAction<string[]>) {},
    setFilms(state, action: PayloadAction<Film[]>) {
      state.films = action.payload;
    },
    setFetchingPeopleAPIStatus(state, action: PayloadAction<boolean>) {
      state.isFetchingPeopleAPI = action.payload;
    },
    setFetchingFilmAPIStatus(state, action: PayloadAction<boolean>) {
      state.isFetchingFilmAPI = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = peoplePageSlice;
