interface InputProps {
	placeholder?: string;
	type?: string;
	value?: string;
	disabled?: boolean;
	label?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	placeholder,
	type,
	value,
	disabled,
	label,
	onChange,
}: InputProps) => {
	return (
		<div className="w-full">
			{label && (
				<p className="text-xl text-white font-semibold mb-2">{label}</p>
			)}
			<input
				disabled={disabled}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
				className="
                w-full
                p-4
                text-lg
                bg-black
                border-2
                border-neutral-800
                rounded-md
                outline-none
				cursor-pointer
                text-white
                focus:border-sky-500
                focus:border-2
                transition
                disabled:bg-neutral-900
                disabled:opacity-70
                disabled:cursor-not-allowed
                
                "
			/>
		</div>
	);
};

export default Input;
