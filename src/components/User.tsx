"use client"

import gql from 'graphql-tag'
import { useQuery } from "@apollo/client"

const USERS = gql(`
    query Query {
        users {
            id,
            name
        }
    }
`);

export default function User() {
    const { data, loading, error } = useQuery(USERS)
    if (loading) {
        return <div>読み込み中...</div>
    }

    return (
        <div>
            {error && <div>{error.message}</div>}
            <ul>
                { data &&
                  data.users.map((v: any, i: number) => (
                      <li key={String(i)}>
                          { `ID: ${v.id}　名前: ${v.name}` }
                      </li>
                  ))
                }
            </ul>
        </div>
    )
};