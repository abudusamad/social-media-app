import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, username, name, password } = body;

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				email,
				username,
				name,
				hashedPassword,
			},
		});
		return NextResponse.json(user);
	} catch (error) {
		console.log("Register Error: ", error);
		return new Response("Internal Sever Error", { status: 500 });
	}
}
