import SettingsSidebar from "@/ui/user/settings/userSettingsSidebar";


export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="">
                <SettingsSidebar />
            </div>
            <div className="ml-44 max-w-[(100vw-16.5rem)]">
                {children}
            </div>
        </>
    )
}