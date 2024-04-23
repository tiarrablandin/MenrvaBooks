import DynamicTable from "@/app/ui/adminPortal/table/dynamicTable";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <DynamicTable entityType="books" />
        </main>
    );
}