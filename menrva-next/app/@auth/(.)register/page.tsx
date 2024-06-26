import Register from "@/ui/register/register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an Account",
};

const RegisterModal = () => {
    return (
        <>
            <Register />
        </>
    );
}

export default RegisterModal;