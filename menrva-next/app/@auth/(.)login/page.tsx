import { Metadata } from "next";
import LoginForm from "@/ui/navbar/login";

export const metadata: Metadata = {
    title: "Sign In",
};

const LoginModal = () => {
    return (
        <>
            <LoginForm />
        </>
    );
}

export default LoginModal;