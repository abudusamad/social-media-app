import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useUsers = (userId: string) => {
	const { data, error, isLoading, mutate } = useSWR(
		userId ? `/api/users/${userId}` : null,
		fetcher
	);
	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useUsers;
