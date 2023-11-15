
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

    return (<div>
        
    </div> );
}
 
export default Form;