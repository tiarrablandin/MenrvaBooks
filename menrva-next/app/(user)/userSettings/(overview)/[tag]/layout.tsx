import UserSpeedDial from "@/ui/user/userSpeedDial";
import { cookies } from "next/headers"

export default function UserLayout({ children, }: { children: React.ReactNode }) {
    const tag = cookies().get('tag')?.value as string;
    const role = cookies().get('role')?.value as string;

    const logout = async () => {
        'use server';
        cookies().delete('tag');
        cookies().delete('role');
        cookies().delete('jwt');
    }

    return (
        <>
            {children}
        </>
    )
}