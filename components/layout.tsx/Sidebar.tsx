import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

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
		<div>
			<div>
                <div>
                    {items.map((item) => (
                        <SidebarItem/>
                        
                    )}
                </div>
			</div>
		</div>
	);
};

export default Sidebar;
