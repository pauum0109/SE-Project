import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session:{
      strategy:"jwt"
    },
    providers: [
      GoogleProvider({
        // clientId: process.env.GOOGLE_ID as string,
        // clientSecret: process.env.GOOGLE_SECRET as string,
        clientId: "499528376616-5f9hq6gqnre2eq2f2k5dv4l3o8ksue5u.apps.googleusercontent.com",
        clientSecret: "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",
      }),
    ],
    callbacks:{
      async session({ token, session }) {
        if (token) {
          session.user.isAdmin = token.isAdmin;
        }
        return session;
      },
      async jwt({ token}) {
        const userInDb = await prisma.user.findUnique({
          where:{
            email:token.email!
          }
        })
        token.isAdmin = userInDb?.isAdmin!
        return token;
      },    
      
  },
}

export const getAuthSession =() => getServerSession(authOptions)