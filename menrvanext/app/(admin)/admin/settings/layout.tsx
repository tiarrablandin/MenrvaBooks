import SettingsSidebar from "@/app/ui/adminPortal/settings/settingsSidebar";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="ml-14">
                <SettingsSidebar />
            </div>
            {children}
        </>
    )
}