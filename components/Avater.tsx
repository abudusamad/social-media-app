import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";


interface AvaterProps {
    userId: string;
    hasBorder?: boolean;
    isLarge?: boolean;
}
const Avater = ({
    userId,
    hasBorder,
    isLarge,
}: AvaterProps) => {
    const router = useRouter();

    const { data: fecharUser } = useUser(userId);
    
    const onClick = useCallback(() => {
        event?.stopPropagation();
        const url = `/usrs/${userId}`;

        router.push(url);
    }, [router, userId]);
    

    return (
			<div
				className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
			>
				<Image
					fill
					style={{
						objectFit: "cover",
						borderRadius: "100%",
					}}
					alt="Avatar"
					onClick={onClick}
					src={fecharUser?.profileImage || "/images/placeholder.png"}
				/>
			</div>
		);
}
 
export default Avater;