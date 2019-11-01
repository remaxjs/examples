import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './app.css';

class Response {
  constructor(body, init) {
    this.body = body;
    this.init = init;
  }

  text() {
    return Promise.resolve(this.body);
  }
}

const client = new ApolloClient({ uri: 'https://etmdb.com/graphql', fetch: (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: options.method,
      headers: options.headers,
      data: options.body,
      success(res) {
        resolve(new Response(JSON.stringify(res.data)));
      },
      fail(error) {
        resolve(error);
      }
    })
  });
} });

const App = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};

export default App;
