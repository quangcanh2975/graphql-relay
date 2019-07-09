import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import environment from './src/enviroment';
import { graphql, QueryRenderer } from 'react-relay';

const enviroment = enviroment;
export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UserQuery {
            viewer {
              id
            }  
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}