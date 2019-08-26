const { ApolloServer, makeExecutableSchema /* gql */ } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./schema.graphql'); //graphql-tag (https://github.com/apollographql/graphql-tag)
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: { requireResolversForResolveType: false }
});

const server = new ApolloServer({
    schema,
    context: ({ req }) => {
        const authToken = req.headers.authorization || '';
        return { authToken };
    },
    // mocks: true
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});