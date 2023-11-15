import Home from "@/app/page";
import Sidebar from "./layout.tsx/Sidebar";
import FollowBar from "./layout.tsx/follow-bar";

const Layout = () => {
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
						<Home />
					</div>
					<FollowBar />
				</div>
			</div>
		</div>
	);
};

export default Layout;
