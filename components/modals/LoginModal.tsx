"use client";

import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) {
			return;
		}
		loginModal.onClose();
		registerModal.onOpen();
	}, [isLoading, registerModal, loginModal]);

	const onSubmit = useCallback(async () => {
		try {
			await signIn("credentials", {
				redirect: false,
				email,
				password,
			});
			toast.success("Logged in successfully");
			router.refresh();
			loginModal.onClose();
		} catch (error) {
			toast.error("Failed to login");
		} finally {
			setIsLoading(false);
		}
	}, [loginModal, email, password, router]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				disabled={isLoading}
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<Input
				disabled={isLoading}
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				First time using twitter?
				<span
					onClick={onToggle}
					className="
            text-white 
            cursor-pointer 
            hover:underline
          "
				>
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Sign in"
			onClose={loginModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
