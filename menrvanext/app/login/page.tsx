import { Dialog } from "@/providers";
import LoginForm from "../ui/navbar/login";

export default async function Page() {
    async function handle() {
        "use server";
        return null;
    }

    return (
        <Dialog size='xl' open={true} handler={handle} className='bg-transparent shadow-none flex items-center !w-2/5 !min-w-[40%] !max-w-[40%] mx-auto'>
            <LoginForm />
        </Dialog>
    );
}