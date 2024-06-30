import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const MASTER_URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clxy6nrcv07v607w8wjs2n7d9/master";

// Configure Apollo Client
const client = new ApolloClient({
  uri: MASTER_URL,
  cache: new InMemoryCache(),
});

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList {
      courses(where: {courseLevel: Basic}) {
        id
        name
        price
        courseLevel
        tags
        time
        author
        banner {
          url
        }
        chapters {
          id
        }
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data;
  } catch (error) {
    console.error('Error in getCourseList:', error);
    throw error;
  }
};
