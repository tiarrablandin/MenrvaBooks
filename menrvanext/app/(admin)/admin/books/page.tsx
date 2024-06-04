import DynamicTable from "@/app/ui/adminPortal/table/dynamicTable";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/providers";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Tabs value="books" className="py-8">
                <TabsHeader className="flex justify-center bg-eggplant w-80 mx-auto">
                    <Tab value="books" className="">
                        Books
                    </Tab>
                    <Tab value="series" className="">
                        Series
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel value="books">
                        <div className="flex justify-center gap-8">
                            <DynamicTable entityType="books" />
                        </div>
                    </TabPanel>
                    <TabPanel value="series">
                        <div className="flex justify-center pt-8 gap-8">
                            <DynamicTable entityType="series" />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    );
}