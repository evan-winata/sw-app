export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  films: string[];
}

export interface PeopleData {
  count: number;
  results: Person[];
}

export interface Film {
  title: string;
  director: string;
  producer: string;
}

export interface PeoplePageState {
  peopleData: PeopleData;
  films: Film[];
  isFetchingPeopleAPI: boolean;
  isFetchingFilmAPI: boolean;
}

export type ContainerState = PeoplePageState;
