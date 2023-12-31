

import getCurrentUser from "@/actions/getCurrentUser";
import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/follow-bar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
	const  curentUser = await getCurrentUser();
	return (
		<div className=" h-screen bg-black">
			<div className="container h-full mx-auto xl:px-32 max-w-6xl">
				<div className=" grid grid-cols-4 h-full">
					<Sidebar />
					<div
						className="
					col-span-3
					lg:col-span-2
					border-x-[1px]
					border-neutral-800
					"
					>
						{children}
					</div>
					<FollowBar />
				</div>
			</div>
		</div>
	);
};

export default Layout;
