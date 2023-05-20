import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
            {
              identifier: credentials?.email,
              password: credentials?.password,
            }
          );
          const user = res.data;
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err: any) {
          console.log("ERRR");
          const keys = err.response.data.error;
          console.log(keys);
          console.log(err.response.data.error.details);
          throw new Error("Failed to authenticate"); // Throw an error to handle authentication failure
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user: data }: { token: any; user: any }) => {
      if (data) {
        token = {
          ...token,
          jwt: data.jwt,
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
        };
      }
      return Promise.resolve(token);
    },
    session: async ({ token, session }: { token: any; session: any }) => {
      if (token) {
        session.id = token.id;
        session.jwt = token.jwt;
      }
      return Promise.resolve(session);
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
