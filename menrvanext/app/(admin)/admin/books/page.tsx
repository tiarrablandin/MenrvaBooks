import AdminTable from "@/app/ui/adminPortal/adminTable";
import AdminTable2 from "@/app/ui/adminPortal/adminTable2";
import BookTable from "@/app/ui/adminPortal/bookTable";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <BookTable />
        </main>
    );
}