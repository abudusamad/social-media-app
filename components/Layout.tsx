import Sidebar from "./layout.tsx/Sidebar";


interface LayoutProps {
	children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className=" h-screen bg-black">
			<div className="container h-full mx-auto xl:px-32 max-w-6xl">
				<div className=" grid grid-cols-4 h-full">
                    <Sidebar/>
				</div>
			</div>
		</div>
	);
};

export default Layout;
