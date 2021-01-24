import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectPeople,
  selectFilms,
  selectIsFetchingPeople,
  selectIsFetchingFilms,
} from './selectors';
import { peoplePageSaga } from './saga';
import { Helmet } from 'react-helmet-async';
import { DetailsSection } from 'app/components/DetailsSection';
import { Table } from 'app/components/Table';
import { Person } from './types';

interface Props {}

export function PeoplePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: peoplePageSaga });

  const [selectedPerson, setSelectedPerson] = useState<Person>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const people = useSelector(selectPeople);
  const films = useSelector(selectFilms);
  const isFetchingPeople = useSelector(selectIsFetchingPeople);
  const isFetchingFilms = useSelector(selectIsFetchingFilms);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPeople(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetDetail = (name: string, films: string[]) => {
    dispatch(actions.getFilms(films));
    const person: Person | undefined = people?.results.find(
      person => person.name === name,
    );
    setSelectedPerson(person);
  };

  const handlePageChange = (nextPageNum: number) => {
    dispatch(actions.getPeople(nextPageNum));
  };

  return (
    <>
      <Helmet>
        <title>People Page</title>
      </Helmet>
      <Layout>
        <Table
          title="People"
          data={people}
          handleSetDetail={handleSetDetail}
          handlePageChange={handlePageChange}
          isFetchingPeople={isFetchingPeople}
        ></Table>
        <DetailsSection
          listOfFilms={films.map(film => film.title)}
          isFetchingFilms={isFetchingFilms}
          {...selectedPerson!}
        ></DetailsSection>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-row-gap: 1rem;
  padding: 1rem;
`;
