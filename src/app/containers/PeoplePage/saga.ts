import { call, put, takeLatest, all } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';

const PEOPLE_API_URL = 'https://swapi.dev/api/people/';

export function* getPeople(action) {
  const { payload }: { payload: number } = action;
  yield put(actions.setFetchingPeopleAPIStatus(true));
  try {
    const result = yield call(request, `${PEOPLE_API_URL}?page=${payload}`);
    yield put(actions.setPeople(result));
  } catch (err) {
    throw err;
  } finally {
    yield put(actions.setFetchingPeopleAPIStatus(false));
  }
}

export function* getFilms(action) {
  const { payload }: { payload: string[] } = action;
  yield put(actions.setFetchingFilmAPIStatus(true));
  try {
    const result = yield all(payload.map(url => call(request, url)));
    yield put(actions.setFilms(result));
  } catch (err) {
    throw err;
  } finally {
    yield put(actions.setFetchingFilmAPIStatus(false));
  }
}

export function* peoplePageSaga() {
  yield takeLatest(actions.getPeople, getPeople);
  yield takeLatest(actions.getFilms, getFilms);
}
