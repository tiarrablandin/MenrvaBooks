import DynamicTable from "@/ui/adminPortal/table/dynamicTable";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/providers/coreProviders";

export default async function Page() {
    return (
        <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
            <Tabs value="users" className="pt-8">
                <TabsHeader className="flex justify-center bg-eggplant dark:bg-rose/70 w-80 mx-auto" indicatorProps={{className: "bg-eggplant dark:bg-rose/70"}} >
                    <Tab value="users" className="text-old-lace">
                        Users
                    </Tab>
                    <Tab value="comments" className="text-parchment/70">
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
                        <div className="flex justify-center gap-8">
                            <DynamicTable entityType="comments" />
                        </div>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    );
}