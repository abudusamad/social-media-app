import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import prisma from "@/libs/prismadb";

export async function getSession() {
	return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
	try {
		const session = await getSession();
		if (!session?.user?.email) {
			throw new Error("User email not found");
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email as string,
			},
		});
		if (!currentUser) {
			throw new Error("User not found");
		}
		return currentUser;
	} catch (error: any) {
		return null;
	}
}
