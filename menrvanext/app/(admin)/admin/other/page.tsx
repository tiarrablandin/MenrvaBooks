import DynamicTable from "@/app/ui/adminPortal/table/dynamicTable";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/providers";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Tabs value="genres" className="py-8">
                <TabsHeader className="flex justify-center bg-eggplant w-80 mx-auto">
                    <Tab value="genres" className="">
                        Genres
                    </Tab>
                    <Tab value="keywords" className="">
                        Keywords
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel value="genres">
                        <div className="flex justify-center gap-2">
                            <DynamicTable entityType="genres" variant='small' />
                            <DynamicTable entityType="subgenres" variant='small' />
                        </div>
                    </TabPanel>
                    <TabPanel value="keywords">
                        <div className="flex justify-center gap-2">
                            <DynamicTable entityType="keywords" variant='small' />
                            <DynamicTable entityType="tags" variant='small' />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    );
}