"use client";

import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";
import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) {
			return;
		}
		loginModal.onOpen();

		registerModal.onClose();
	}, [isLoading, registerModal, loginModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			await axios.post("/api/register", {
				email,
				password,
				name,
				username,
			});
			setIsLoading(false);
			toast.success("Account created successfully");
			registerModal.onClose();
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	}, [registerModal, email, password, name, username]);

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
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Input
				disabled={isLoading}
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
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
				Already have an account?
				<span
					onClick={onToggle}
					className="
            text-white 
            cursor-pointer 
            hover:underline
          "
				>
					{" "}
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Create an account"
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
