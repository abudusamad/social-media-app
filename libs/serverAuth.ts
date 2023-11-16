import { authOptions } from "@/app/pages/api/auth/[...nextauth[";
import prisma from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions);

	if (!session?.user?.email) {
		throw new Error("Not signed in");
	}

	const currentUser = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	});
	if (!currentUser) {
		throw new Error("Not Signed In");
	}
	return { currentUser };
};

export default serverAuth;
