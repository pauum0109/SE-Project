import { prisma } from "@/utils/connect";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        console.log("Incoming request data:", { email, password });

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            console.log("User already exists.");
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully.");

        const user = await prisma.user.create({
            data: { email, password: hashedPassword },
        });
        console.log("User created:", user);

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error in signup route:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
