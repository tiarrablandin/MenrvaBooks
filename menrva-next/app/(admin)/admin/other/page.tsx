import DynamicTable from "@/ui/adminPortal/table/dynamicTable";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/providers/coreProviders";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Tabs value="genres" className="pt-8">
                <TabsHeader className="flex justify-center bg-eggplant dark:bg-rose/70 w-80 mx-auto" indicatorProps={{ className: "bg-eggplant dark:bg-rose/70" }} >
                    <Tab value="genres" className="text-parchment/70">
                        Genres
                    </Tab>
                    <Tab value="keywords" className="text-parchment/70">
                        Keywords
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel value="genres">
                        <div className="flex gap-4">
                            <DynamicTable entityType="genres" variant='small' />
                            <DynamicTable entityType="subgenres" variant='small' />
                        </div>
                    </TabPanel>
                    <TabPanel value="keywords">
                        <div className="flex gap-4">
                            <DynamicTable entityType="keywords" variant='small' />
                            <DynamicTable entityType="tags" variant='small' />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    );
}