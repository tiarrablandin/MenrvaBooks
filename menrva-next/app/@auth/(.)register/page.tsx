import RegisterForm from "@/ui/subscriptions/register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MenrvaBooks | Create an Account",
};

const RegisterModal = () => {
    return (
        <>
            <RegisterForm />
        </>
    );
}

export default RegisterModal;