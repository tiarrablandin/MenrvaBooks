'use client';

import { Dialog } from "@/providers"
import LoginForm from "../../ui/navbar/login"
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();

    return (
        <Dialog size='xl' open={true} handler={() => router.back()} className='bg-transparent shadow-none flex items-center !w-2/5 !min-w-[40%] !max-w-[40%] mx-auto'>
            <LoginForm />
        </Dialog>
    );
}

export default LoginModal;