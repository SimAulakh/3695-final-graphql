const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./src/schema')

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://simrat:st2uvwxyz8@graphql-api.5vlpg.mongodb.net/graphqlNotes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);


mongoose.connection.once("open", function () {
    const port = process.env.PORT || 4000
    new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
        console.log(`Server ready at: http://localhost:${port}`),
    )
});
