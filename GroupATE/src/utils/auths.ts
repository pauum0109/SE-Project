import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"; // Import Credentials Provider
import { prisma } from "./connect";
import bcrypt from "bcrypt"; // Use bcrypt for password hashing

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
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Email & Password",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                // Find user in the database
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    throw new Error("No user found with this email");
                }

                // Compare password using bcrypt
                // @ts-ignore
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }

                return user; // Return user if credentials are valid
            },
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        async jwt({ token }) {
            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email!,
                },
            });
            token.isAdmin = userInDb?.isAdmin!;
            return token;
        },
    },
};

export const getAuthSession = () => getServerSession(authOptions);
