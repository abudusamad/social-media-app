"use client";

import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
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

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			await axios.post("/api/register", {
				email,
				password,
				username,
				name,
			});
			setIsLoading(false);
			toast.success("Account created successfully");

			signIn("credentials", {
				email,
				password,
			});

			registerModal.onClose();
		} catch (error) {
			console.log(error);
			toast.error("Something Went Wrong")
		} finally {
			setIsLoading(false);
		}
	}, [registerModal, email, password, username, name]);

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
