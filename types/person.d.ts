type PlanetType = {
  surfaceWater: number,
}

type FilmType = {
  title: string,
  releaseDate: string,
  planetConnection: {
    planets: PlanetType[],
  }
  producers: string[],
}

type PageInfoType = {
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  startCursor: string,
  endCursor: string,
}

type PersonType = {
  person: {
    name: string,
    birthYear: string,
    "species": {
      "averageHeight": number | null,
    },
    filmConnection: {
      films: FilmType[];
      pageInfo: PageInfoType,
      totalCount: number,
    }
  },
}


