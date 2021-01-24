import { put, takeLatest } from 'redux-saga/effects';
import * as slice from '../slice';

import { peoplePageSaga, getPeople, getFilms } from '../saga';

describe('getRepos Saga', () => {
  const mockGetPeopleAction = { payload: 1 };
  const mockGetFilmAction = { payload: ['https://test-url.com'] };
  let getPeopleSagaIterator: ReturnType<typeof getPeople>;
  let getFilmsSagaIterator: ReturnType<typeof getFilms>;

  it('should set fetching people status at the beginning', () => {
    getPeopleSagaIterator = getPeople(mockGetPeopleAction);
    const putPeopleLoadingDescriptor = getPeopleSagaIterator.next().value;
    expect(putPeopleLoadingDescriptor).toEqual(
      put(slice.actions.setFetchingPeopleAPIStatus(true)),
    );
  });

  it('should set people data to store', () => {
    const mockResult = {
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
    getPeopleSagaIterator = getPeople(mockGetPeopleAction);
    const putPeopleLoadingDescriptor = getPeopleSagaIterator.next().value;
    expect(putPeopleLoadingDescriptor).toEqual(
      put(slice.actions.setFetchingPeopleAPIStatus(true)),
    );

    const requestDescriptor = getPeopleSagaIterator.next().value;
    expect(requestDescriptor).toMatchSnapshot();

    const setResultDescriptor = getPeopleSagaIterator.next(mockResult).value;
    expect(setResultDescriptor).toEqual(
      put(slice.actions.setPeople(mockResult)),
    );

    const disablePeopleLoadingDescriptor = getPeopleSagaIterator.next().value;
    expect(disablePeopleLoadingDescriptor).toEqual(
      put(slice.actions.setFetchingPeopleAPIStatus(false)),
    );
  });

  it('should set films data to store', () => {
    const mockResult = [
      {
        title: 'A New Hope',
        director: 'mock',
        producer: 'mock',
      },
    ];
    getFilmsSagaIterator = getFilms(mockGetFilmAction);
    const putFilmLoadingDescriptor = getFilmsSagaIterator.next().value;
    expect(putFilmLoadingDescriptor).toEqual(
      put(slice.actions.setFetchingFilmAPIStatus(true)),
    );

    const requestDescriptor = getFilmsSagaIterator.next().value;
    expect(requestDescriptor).toMatchSnapshot();

    const setResultDescriptor = getFilmsSagaIterator.next(mockResult).value;
    expect(setResultDescriptor).toEqual(
      put(slice.actions.setFilms(mockResult)),
    );

    const disableFilmLoadingDescriptor = getFilmsSagaIterator.next().value;
    expect(disableFilmLoadingDescriptor).toEqual(
      put(slice.actions.setFetchingFilmAPIStatus(false)),
    );
  });
});
