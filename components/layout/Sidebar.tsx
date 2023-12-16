
import { BiLogOut } from "react-icons/bi";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./Sidebar-logo";
import SidebarItem from "./sidebar-item";
import SidebarTweetButton from "./sidebar-tweet-button";
import getCurrentUser from "@/actions/getCurrentUser";

const Sidebar = async () => {
	const currentUser =await getCurrentUser();

	const items = [
		{
			icon: BsHouseFill,
			label: "Home",
			href: "/",
		},
		{
			icon: BsBellFill,
			label: "Notifications",
			href: "/notifications",
			auth: true,
			alert: currentUser?.hasNotification,
		},
		{
			icon: FaUser,
			label: "Profile",
			href: `/users/${currentUser?.id}`,
			auth: true,
		},
	];
	return (
		<div className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map((item) => (
						<SidebarItem
							key={item.href}
							label={item.label}
							icon={item.icon}
							href={item.href}
							auth={item.auth}
						/>
					))}
					{currentUser && <SidebarItem label="Logout" icon={BiLogOut} />}
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
