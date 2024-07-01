import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const MASTER_URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clxy6nrcv07v607w8wjs2n7d9/master";

// Configure Apollo Client
const client = new ApolloClient({
  uri: MASTER_URL,
  cache: new InMemoryCache(),
});

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList($level: Level!) {
      courses(where: { level: $level }) {
        id
        name
        level
        price
        tags
        time
        banner {
          url
        }
        chapters {
          id
        }
        author
      }
    }
  `;

  const variables = { level };

  try {
    const { data } = await client.query({ query, variables });
    return data.courses;
  } catch (error) {
    console.error('Error in getCourseList:', error.networkError?.result || error);
    throw error;
  }
};
