import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';
import { BreakingBadAPI } from './datasources/brba-api';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		brbaApi: new BreakingBadAPI(),
	}),
});

server.listen().then(({ url }) => {
	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at ${url}`);
});
