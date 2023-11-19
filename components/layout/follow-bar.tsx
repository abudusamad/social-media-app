"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const FollowBar = () => {
	const { user, isLoaded, isSignedIn } = useUser();
	if (isLoaded && !isSignedIn) {
		return null;
	}

	return (
		<div className="px-6 py-4 hidden lg:block">
			<div className="bg-neutral-800 rounded-xl p-4">
				<h2 className="text-white text-xl font-semibold">Who to follow</h2>
				<div>
					{isSignedIn && (
						<div className="flex flex-row gap-4">
							<UserButton afterSignOutUrl="/" />
							<div className="flex flex-col">
								<p className="text-white font-semibold text-sm">
									{user.fullName}
								</p>
								<p className="text-neutral-400 text-sm">{user.username}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FollowBar;
