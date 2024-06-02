import ReduxProvider from "@/providers/reduxProvider";
import { MenrvaThemeProvider } from "@/providers/themeProvider";
import Sidebar from "@/ui/adminPortal/adminSidebar";
import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function AdminLayout({ children, add, update }: { children: React.ReactNode, add: React.ReactNode, update: React.ReactNode }) {
    return (
        <ReduxProvider>
            <MenrvaThemeProvider>
                <div className={`flex w-full min-h-screen ${advent.className}`}>
                    <Sidebar />
                    <main className="flex-grow w-[calc(100%-4rem)] min-h-full">
                        {add}
                        {update}
                        {children}
                    </main>
                </div>
            </MenrvaThemeProvider>
        </ReduxProvider>
    )
}