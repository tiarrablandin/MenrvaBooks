import { Metadata } from "next";
import LoginForm from "@/ui/navbar/login";
import ReduxProvider from "@/providers/reduxProvider";

export const metadata: Metadata = {
    title: "Sign In",
};

const LoginModal = () => {
    return (
        <ReduxProvider>
            <LoginForm />
        </ReduxProvider>
    );
}

export default LoginModal;