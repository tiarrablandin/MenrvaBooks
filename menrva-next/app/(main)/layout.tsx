import InitializeUserCredentials from "@/lib/utils/initializeUserCredentials";
import ReduxProvider from "@/providers/reduxProvider";
import InitializeInteractions from "@/ui/book/interactions/initalizeInteractions";
import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import { cookies } from "next/headers";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const tag = cookies().get('tag')?.value as string;
    const role = cookies().get('role')?.value as string;
    const token = cookies().get('jwt')?.value as string;

    console.log(token)

    const logout = async () => {
        'use server';
        cookies().delete('tag');
        cookies().delete('role');
        cookies().delete('jwt');
    }

    return (
        <>
            <Nav tag={tag} role={role} logout={logout} />

            {children}
            <Footer />

            <ReduxProvider>
                <InitializeUserCredentials />
            </ReduxProvider>
        </>
    )
}