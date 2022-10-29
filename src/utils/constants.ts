export const PEOPLE_QUERY = `
  query Home {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const PERSON_FILMS_QUERY = `
  query Query($personId: ID) {
    person(id: $personId) {
      name,
      birthYear
      species {
        averageHeight
      }
      filmConnection {
        films {
          title
          releaseDate
          planetConnection {
            planets {
              surfaceWater
            }
          }
          producers
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
      }
    }
  }
`;
