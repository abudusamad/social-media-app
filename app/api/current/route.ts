import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET({params}: {params: {email: string}}) {
    try {
        
        const user = await prisma.user.findUnique({
            where: {
                email: params.email,
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log("Current User Error: ", error);
        return new Response("Internal Sever Error", { status: 500 });
    }
}