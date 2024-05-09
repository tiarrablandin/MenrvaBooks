import Settings from "@/app/ui/adminPortal/settings/settingsSidebar";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Settings/>
        </main>
    );
}