import Header from "@/components/Header";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<Header label="Home" />
			<UserButton afterSignOutUrl="/"/>
		</div>
	);
}
