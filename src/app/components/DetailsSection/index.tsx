import React from 'react';
import styled from 'styled-components/macro';
import { RowDetails } from './components/RowDetails';
import Loading from './loading-icon';

interface DetailsSectionProps {
  name: string;
  birth_year: string;
  gender: string;
  listOfFilms: string[];
  isFetchingFilms: boolean;
}

export function DetailsSection(props: DetailsSectionProps) {
  const { name, birth_year, gender, listOfFilms, isFetchingFilms } = props;
  const listFilm = listOfFilms.join(', ');
  return (
    <Wrapper>
      {isFetchingFilms ? (
        <Loading />
      ) : (
        <>
          <RowDetails label="Name" content={name} />
          <RowDetails label="Birth year" content={birth_year} />
          <RowDetails label="Gender" content={gender} />
          <RowDetails label="List of films" content={listFilm} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
