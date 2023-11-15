import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./sidebar-item";
import SidebarLogo from "./Sidebar-logo";

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
	},
	{
		icon: FaUser,
		label: "Profile",
		href: "/user/45645",
	},
];

const Sidebar = () => {
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
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
