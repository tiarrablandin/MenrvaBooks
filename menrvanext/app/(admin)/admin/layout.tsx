import Sidebar from "@/app/ui/adminPortal/sidebar";

export default function AdminLayout({ children, add, update }: { children: React.ReactNode, add: React.ReactNode, update: React.ReactNode }) {
    return (
        <div className="flex w-full min-h-screen justify">
            <Sidebar />
            <main className="flex-grow w-[calc(100%-4rem)] min-h-full">
                {add}
                {update}
                {children}
            </main>
        </div>
    )
}