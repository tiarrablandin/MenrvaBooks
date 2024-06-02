import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import { cookies } from "next/headers";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const tag = cookies().get('tag')?.value as string;
    const role = cookies().get('role')?.value as string;
    const theme = cookies().get('theme')?.value;

    const logout = async () => {
        'use server';
        cookies().delete('tag');
        cookies().delete('role');
        cookies().delete('jwt');
    }

    return (
        <>
            <Nav tag={tag} role={role} logout={logout} theme={theme} />

            {children}
            <Footer />
        </>
    )
}