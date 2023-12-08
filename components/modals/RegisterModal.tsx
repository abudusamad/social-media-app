"use client";


import useEditModal from "@/hooks/useEditModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/use-registration-modal";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterModal = () => {
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const[password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(  () => {
		if (isLoading) {
			return;
		}

		registerModal.onClose();
	}, [isLoading, registerModal]);

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
			toast.error("Something went wrong")
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
