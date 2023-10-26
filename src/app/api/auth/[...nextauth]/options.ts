import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        username: {
            label: "Username:",
            type: "text",
            placeholder: "Username"
        },
        password: {
            label: "Password:",
            type: "password",
            placeholder: "Password here"
        }
      },
      async authorize(credentials) {
        const user = { id: "43", name: "Dave", password: "nextauth"}

        if(credentials?.username === user.name && credentials?.password === user.password){
            return user
        } else {
            return null
        }
      }
    }),
  ],
  // pages: {
  //     signIn: '/signin'
  // }
};
