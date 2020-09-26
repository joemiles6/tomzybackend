import {gql} from "apollo-server-express"
let typeDefs = gql`
type Query {
  hello: String!
}
input newUser{
  username: String!
  email: String!
  firstname: String!
  lastname: String
  password: String!
}
input taskUser {
  explanation: String!
  fakeId: Int
}
input loggedUser {
  email: String!
  password: String!
}
type Mutation {
  postLog(user: newUser): User!
  login(user: loggedUser): User!
  Task(task: taskUser): Task!
  cookieuser: String!
  getTask: [Task!]
  User: User!
  Api: String
  deleteTask(count: Int!): String
  logout: String
}
type Task {
  id: ID!
  explanation: String!
  createdAt: String!
  fakeId: Int
}
type User {
  id: ID!
  createdEvents: [String]
  username: String!
  firstname: String!
  lastname: String
}
`
export default typeDefs