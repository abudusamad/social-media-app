"use client";

import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const onTogle = useCallback(() => {
		if (isLoading) {
			return;
		}
		registerModal.onClose();
		loginModal.onOpen();
	}, [loginModal, registerModal, isLoading]);

	const onSubmit = useCallback(() => {
		try {
			setIsLoading(true);

			registerModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				disabled={isLoading}
				placeholder="Email"
				onchange={(event) => setEmail(event.target.value)}
				value={email}
			/>
			<Input
				disabled={isLoading}
				placeholder="Name"
				onchange={(event) => setName(event.target.value)}
				value={name}
			/>
			<Input
				disabled={isLoading}
				placeholder="Username"
				onchange={(event) => setUsername(event.target.value)}
				value={username}
			/>
			<Input
				disabled={isLoading}
				placeholder="Password"
				onchange={(event) => setPassword(event.target.value)}
				value={password}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				Already have an account?
				<span
					onClick={onTogle}
					className="text-white cursor-pointer hover:underline"
				>
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
