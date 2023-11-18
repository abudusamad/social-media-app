"use client";

import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			await signIn("credentials", {
				email,
				password,
			});

			toast.success("Login successfully");

			loginModal.onClose();
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	}, [loginModal, email, password]);

	const onTogle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				onchange={(event) => setEmail(event.target.value)}
				value={email}
				disabled={isLoading}
			/>
			<Input
				placeholder="Password"
				type="password"
				onchange={(event) => setPassword(event.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);
	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p className="flex items-center ml-10 px-2">
				First time using my app
				<span
					onClick={onTogle}
					className="text-white cursor-pointer hover:underline"
				>
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOPen}
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
