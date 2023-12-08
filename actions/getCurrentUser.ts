import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
	return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
	const session = await getSession();

	if (!session?.user?.email) {
		return null;
	}

	const CurrentUser = await prisma.user.findUnique({
		where: { email: session.user.email },
	});
	if (!CurrentUser) {
		return null;
	}

	return CurrentUser;
}
