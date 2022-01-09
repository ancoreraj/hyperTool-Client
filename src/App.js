import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import Home from './components/Home';
import CreateLog from './components/CreateLog';

import './App.css'

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: process.env.REACT_APP_SERVER }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});


function App() {
    return (
        <ApolloProvider client={client}>
            <div className='app'>
                <CreateLog />
                <Home />

            </div>
        </ApolloProvider>
    );
}

export default App;
