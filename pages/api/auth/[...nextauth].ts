import { JWTOptions } from "google-auth-library";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
    async jwt(token, user, account, profile, isNewUser) {
      console.log("account", account);
      if (account?.idToken) {
        token.accessToken = account.idToken;
      }
      return token;
    },
  },
});
