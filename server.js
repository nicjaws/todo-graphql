const express = require('express');
const { ApolloServer, gpl } = require('apollo-server-express');
const cors = require('cors');

let todos = [
  {
    id: 0,
    text: 'Hello from GraphQL',
    completed: false,
  }
]

const typeDefs = gql`
  type Todo {
    id: String
    text: String
    completed: Boolean
  }
  type Query {
    todos: [Todo]!
  }
  type Mutation {
    createTodo(text: String!): String
    removeTodo(id: String!):String
  }
`