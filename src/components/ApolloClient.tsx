"use client"

import { ApolloProvider } from "@apollo/client"
import { client } from "../../apollo/client"

export default function ApolloClient({ children }: React.PropsWithChildren) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
};