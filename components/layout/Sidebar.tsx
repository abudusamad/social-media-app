import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./sidebar-item";
import SidebarLogo from "./Sidebar-logo";
import SidebarTweetButton from "./sidebar-tweet-button";
import { BiLogOut } from "react-icons/bi";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";



const Sidebar = () => {
	const { data: currentUser } = useCurrentUser();
	

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
			alert: currentUser?.hasNotification
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
                    <SidebarLogo/>
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
					<SidebarTweetButton/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
