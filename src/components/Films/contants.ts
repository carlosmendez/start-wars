export const personFilmsQuery = `
  query Query($personId: ID, $first: Int, $last: Int, $after: String, $before: String) {
    person(id: $personId) {
      filmConnection(first: $first, last: $last, after: $after, before: $before) {
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
