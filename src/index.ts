const express = require('express');
const { ApolloServer } = require('apollo-server-express');
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();
import {isAuth} from "./config/authentication"
// import cors from "./middleware/cors"
app.use(cookieParser())
app.use(isAuth)
app.use(cors({
	origin: process.env.ORIGIN || 'http://localhost:3000',
	credentials: true,
}));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))

  // handle spa 
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}


// #3 Import GraphQL type definitions
import typeDefs from "./schema/Query/graphqlSchema"
// #4 Import GraphQL resolvers
import resolvers from "./schema/resolver/graphqlResolver"
// #5 Initialize an Apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      const isAuth = req.isAuth
      const userId = req.userId
      return { isAuth, userId, res, req};
    }
  });
// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app, path: '/graphql', cors: { origin: process.env.CLIENT_URL } });

//  #8 Export the express app
export default app
