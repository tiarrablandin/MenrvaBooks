import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: {
        template: '%s | MenrvaBooks',
        default: '',
    }
};

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const tag = cookies().get('tag')?.value as string;
    const role = cookies().get('role')?.value as string;
    const theme = cookies().get('theme')?.value as string;

    return (
        <div className="flex flex-col min-h-screen">
            <Nav tag={tag} role={role} theme={theme} />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}