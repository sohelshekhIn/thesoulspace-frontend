import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "NextAuth",
      id: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        return await handleLogin(credentials);
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
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  debug: true,
};

const handleLogin = (credentials: any) => {
  return (
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
        identifier: credentials?.email,
        password: credentials?.password,
      })
      .then((res) => {
        return res.data;
      })
      // If no error and we have user data, return it
      .catch((err) => {
        if (
          err.response &&
          err.response.data.error.name === "ValidationError" &&
          err.response.data.error.message === "Invalid identifier or password"
        ) {
          throw new Error("Invalid email or password");
        } else if (
          err.response &&
          err.response.data.error.name === "ApplicationError" &&
          err.response.data.error.message ===
            "Your account has been blocked by an administrator"
        ) {
          throw new Error(
            "Your account has been blocked, please contact support."
          );
        } else if (err.code) {
          // Handle all axios errors here
          if (err.code === "ECONNREFUSED") {
            throw new Error("Server refused to connect");
          }
        } else {
          throw new Error("Failed to authenticate, please try again");
        }
      }) || null
  );
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
