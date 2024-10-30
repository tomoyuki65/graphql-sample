import { readFileSync } from "fs";
import { join } from "path";
import { IResolvers } from '@graphql-tools/utils'
import { Resolvers } from "../__generated__/server/resolvers-types";
import { User } from '../__generated__/client/graphql';

const userTypeDefs = readFileSync(
    join(process.cwd(), "apollo/documents/userSchema.gql"),
    "utf-8"
);

const userResolvers: IResolvers<Resolvers> = {
    Query: {
        users() {
            const USERS = []

            for (let i: number = 0; i < 3; i++) {
                const USER: User = {
                    id: i,
                    name: `User-${i+1}`
                }

                USERS.push(USER)
            }

            return USERS
        },
    },
};

export { userTypeDefs, userResolvers };