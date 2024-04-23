import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@/providers';
import { forwardRef } from 'react';
import AdminTable from './oldAdminTable';

const tabHeaders = ["Book", "Author", "Series", "Genre", "Subgenre", "Keywords", "Tags"];

const AdminTabs = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Tabs id="advanced-search-tabs" value="Book" className="min-w-96 w-full h-full overflow-scroll no-scrollbar" ref={ref}>
            <TabsHeader className='bg-eggplant -mb-1 mt-4 w-[90%] mx-auto'>
                {tabHeaders.map((tabHeader) => (
                    <Tab key={tabHeader} value={tabHeader}>{tabHeader}</Tab>
                ))}
            </TabsHeader>
            <TabsBody className='w-full'>
                {tabHeaders.map((header) => (
                    <TabPanel key={header} value={header} className='text-eggplant dark:text-old-lace p-0 mb-6'>
                        <AdminTable />
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
});

AdminTabs.displayName = "AdminTabs";

export default AdminTabs;