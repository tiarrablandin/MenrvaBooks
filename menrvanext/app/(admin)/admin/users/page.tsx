import DynamicTable from "@/app/ui/adminPortal/table/dynamicTable";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/providers";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Tabs value="users" className="py-8">
                <TabsHeader className="flex justify-center bg-eggplant w-80 mx-auto">
                    <Tab value="users" className="">
                        Users
                    </Tab>
                    <Tab value="comments" className="">
                        Comments
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    <TabPanel value="users">
                        <div className="flex justify-center gap-8">
                            <DynamicTable entityType="users" />
                        </div>
                    </TabPanel>
                    <TabPanel value="comments">
                        <div className="flex justify-center pt-8 gap-8">
                            <DynamicTable entityType="comments" />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    );
}