import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const allAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_ACCESS_TOKEN,
};

export default NextAuth(allAuthOptions);
