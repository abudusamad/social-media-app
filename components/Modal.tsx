"use client";

import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
}) => {
	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		onClose();
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		onSubmit();
	}, [disabled, onSubmit]);

	if (!isOpen) {
		return null;
	}
	return (
		<>
			<div
				className="
			flex 
			justify-center
			items-center
			overflow-x-hidden
			overflow-y-auto
			fixed
			inset-0
			z-50
			outline-none
			focus:outline-none
			bg-neutral-800
			bg-opacity-70
			"
			>
				<div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
					<div>
						<div
							className="
						h-full
						lg:h-auto
						border-0
						rounded-lg
						shadow-lg
						relative
						flex
						flex-col
						w-full
						bg-black
						outline-none
						foucus:outline-none
						"
						>
							<div
								className="
							flex
							items-center
							justify-between
							p-10
							rounded-t
							"
							>
								<h3 className="text-white text-3xl font-semibold">{title}</h3>
								<button
									className="
									text-white
									ml-auto
									border-0
									hover:opacity-70
									transition	
									"
									onClick={handleClose}
								>
									<AiOutlineClose size={20} />
								</button>
							</div>
							<div className="relative p-10 flex-auto">
								{body}
							</div>
							<div className="flex flex-col gap-2 p-10">
								<Button disabled={disabled} onClick={handleSubmit} label={actionLabel} 
									secondary fullWidth large
								/>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
