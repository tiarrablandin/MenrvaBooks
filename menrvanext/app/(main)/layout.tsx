import Nav from "../ui/navbar/nav"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Nav></Nav>

            {children}
        </section>
    )
}