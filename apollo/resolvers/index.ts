import { mergeResolvers } from '@graphql-tools/merge'
import { mergeTypeDefs } from '@graphql-tools/merge';
import { userTypeDefs, userResolvers } from './user'

const typeDefs = mergeTypeDefs([
    userTypeDefs,
]);
const resolvers = mergeResolvers([
    userResolvers,
]);

export {typeDefs, resolvers};