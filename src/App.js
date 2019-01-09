import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddCompany from './components/AddCompany';
import CompanyList from './components/CompanyList';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>Wherever here</h1>
        <CompanyList/>
        
        <AddCompany/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
