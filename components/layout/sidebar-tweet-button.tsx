"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useLoginModal from "@/hooks/useLogingModal";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
	const router = useRouter();
	const editModal = useEditModal();

	const loginModal = useLoginModal();
	const { data: currentUser } = useCurrentUser();

	const onClick = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		}
		router.push("/");
	}, [loginModal, currentUser, router]);
	return (
		<div onClick={onClick}>
			<div
				className="
        mt-6
        lg:hidden
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        rounded-full
        hover:bg-opacity-80
        transition
        cursor-pointer
        "
			>
				<FaFeather size={28} color="white" />
			</div>
			<div
				className="
        mt-6
        hidden
        lg:block
        px-4
        py-4
        rounded-full
        bg-sky-500
        hover:bg-opacity-80
        cursor-pointer
        "
			>
				<p onClick={editModal.onOpen} className=" hidden lg:block text-center font-semibold text-white text-[20px]">
					Tweet
				</p>
			</div>
		</div>
	);
};

export default SidebarTweetButton;
