"use client"

import { Dialog } from "@/providers"
import LoginForm from "../../ui/navbar/login"
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();

    return (
        <Dialog size='xl' open={true} handler={() => router.back()} className='bg-transparent shadow-none w-full'>
            <LoginForm />
        </Dialog>
    );
}

export default LoginModal;