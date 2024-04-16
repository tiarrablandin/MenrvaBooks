import Nav from "../ui/navbar/nav"

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <>
            <Nav></Nav>

            {children}
        </>
    )
}