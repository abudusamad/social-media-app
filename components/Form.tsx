import useRegisterModal from "@/hooks/use-registration-modal";
import useLoginModal from "@/hooks/useLogingModal";

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

const Form: React.FC<FormProps> = ({
    placeholder,
    isComment,
    postId,

}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    return (<div>
        
    </div> );
}
 
export default Form;