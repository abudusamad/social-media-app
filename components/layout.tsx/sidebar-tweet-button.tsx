import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    return (<div>
        <div className="
        mt-6
        lg:hidden
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        rounded-full
        hover:bg-opacity-80
        transition
        cursor-pointer
        ">
            <FaFeather size={ 28} color="white" />
        </div>
        <div className="
        mt-6
        hidden
        lg:block
        px-4
        py-4
        rounded-full
        bg-sky-500
        hover:bg-opacity-80
        cursor-pointer
        ">
            <p className=" hidden lg:block text-center font-semibold text-white text-[20px]">
                Tweet
            </p>

        </div>
    </div> );
}
 
export default SidebarTweetButton;          