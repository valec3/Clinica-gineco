import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';

const BtnGoogle = ({ setUserGoogle, text }) => {
    const handleLoginGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => setUserGoogle(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });
    return (
        <Button
            onClick={handleLoginGoogle}
            className="bg-white border-gray-100 rounded-md border-2 text-black font-bold uppercase w-full mt-4 hover:bg-gray-100"
        >
            <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google logo"
                className="w-6 h-6 mr-2"
            />
            <span>{text}</span>
        </Button>
    );
};

export default BtnGoogle;
