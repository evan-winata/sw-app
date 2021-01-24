import * as slice from '../slice';
import { ContainerState } from '../types';
import { PeoplePageState, PeopleData, Film, Person } from '../types';

describe('PeoplePage slice', () => {
  let state: ContainerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle setPeople', () => {
    const mockPeopleData = {
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

    expect(
      slice.reducer(state, slice.actions.setPeople(mockPeopleData)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      peopleData: mockPeopleData,
    });
  });

  it('should handle setFilms', () => {
    const mockFilms = [
      {
        title: 'A New Hope',
        director: 'mock',
        producer: 'mock',
      },
    ];

    expect(slice.reducer(state, slice.actions.setFilms(mockFilms))).toEqual<
      ContainerState
    >({
      ...slice.initialState,
      films: mockFilms,
    });
  });

  it('should handle setFetchingPeopleAPIStatus', () => {
    expect(
      slice.reducer(state, slice.actions.setFetchingPeopleAPIStatus(true)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      isFetchingPeopleAPI: true,
    });
  });

  it('should handle setFetchingFilmAPIStatus', () => {
    expect(
      slice.reducer(state, slice.actions.setFetchingFilmAPIStatus(true)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      isFetchingFilmAPI: true,
    });
  });
});
