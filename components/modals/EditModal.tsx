"use client";


import useEditModal from "@/hooks/useEditModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const EditModal = () => {
	const editModal = useEditModal();

	const [profileImage, setProfileImage] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(() => {
		try {
			setIsLoading(true);

			editModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [editModal]);

	const bodyContent = (
		<div>
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
                placeholder="Bio"
                onchange={(event) => setBio(event.target.value)}
                value={bio}
            />
		</div>
	);

    return (
        <Modal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            onSubmit={onSubmit}
            title="Edit Profile"
            actionLabel="Save"
            disabled={isLoading}
            body={bodyContent}
        />
    );
};

export default EditModal;
