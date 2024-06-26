import ReduxProvider from "@/providers/reduxProvider";
import Sidebar from "@/ui/adminPortal/adminSidebar";
import ThemeToggle from "@/ui/theme/themeToggle";
import { cookies } from "next/headers";

export default function AdminLayout({ children, add, update }: { children: React.ReactNode, add: React.ReactNode, update: React.ReactNode }) {
    const theme = cookies().get('theme')?.value as string;

    return (
        <ReduxProvider>
            <div className={`flex w-full min-h-screen`}>
                <div className="absolute right-10 top-10 bg-rose/70 dark:bg-eggplant rounded-full p-1">
                    <ThemeToggle theme={theme} />
                </div>
                <Sidebar />
                <main className="flex-grow w-[calc(100%-4rem)] min-h-full">
                    {add}
                    {update}
                    {children}
                </main>
            </div>
        </ReduxProvider>
    )
}