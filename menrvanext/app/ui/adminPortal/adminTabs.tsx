'use client'

import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@/providers';
import React, { Ref } from 'react';
import AdminTable from './adminTable';

const tabHeaders = ["Book", "Author", "Series", "Genre", "Subgenre", "Keywords", "Tags"];

const AdminTabs: React.FC = React.forwardRef(({ }, ref: Ref<HTMLDivElement>) => {

    return (
        <>
            <Tabs id="advanced-search-tabs" value="Book" className="min-w-96 h-full w-[95%] mx-auto mt-3" ref={ref}>
                <TabsHeader className='bg-eggplant w-[90%]'>
                    {tabHeaders.map((tabHeader) => (
                        <Tab key={tabHeader} value={tabHeader}>{tabHeader}</Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {tabHeaders.map((header) => (
                        <TabPanel key={header} value={header} className='text-eggplant dark:text-old-lace p-0'>
                            <AdminTable showUnreviewed={false}/>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </>
    )
});

export default AdminTabs;