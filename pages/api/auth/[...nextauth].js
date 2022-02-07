import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default nextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign in with Credentials",

      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
        } catch (error) {
          const errorMessage = error.response.data.message;
          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
  ],

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt() {},

    async session() {},
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    // brandColor: "", // Hex color code #33FF5D
    // logo: "/logo.png", // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
});
