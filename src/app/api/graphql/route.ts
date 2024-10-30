import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { Resolvers } from "../../../../apollo/__generated__/server/resolvers-types";
import { typeDefs, resolvers } from '../../../../apollo/resolvers/index';
import { NextRequest } from 'next/server';

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };