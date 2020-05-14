import * as React from 'react';
import { View } from 'remax/ali';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_MOVIES = gql`
  query {
    cinemaDetail(id: "Q2luZW1hRGV0YWlsTm9kZTo1") {
      hallName
    }
  }
`;

export default () => {
  return (
    <View>
      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return <View>Loading...</View>;
          if (error) return <View>Error :(</View>;

          return <View>{data.cinemaDetail.hallName}</View>;
        }}
      </Query>
    </View>
  );
};
