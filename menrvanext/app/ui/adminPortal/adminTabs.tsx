'use client'

import { Checkbox, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@/providers';
import React, { Ref, useState } from 'react'
import SearchTable from './searchTable';

const tabHeaders = ["Book", "Author", "Series", "Genre", "Subgenre", "Keywords", "Tags", "Users"];

const AdminTabs: React.FC = React.forwardRef(({ }, ref: Ref<HTMLDivElement>) => {
    const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);

    return (
        <>
            <div className="w-[95%] flex justify-end mt-8">
                <Checkbox
                    checked={showUnreviewedOnly}
                    onChange={e => setShowUnreviewedOnly(e.target.checked)}
                    label="Show unreviewed books only"
                    className="before:h-8 before:w-8"
                />
            </div>
            <Tabs id="advanced-search-tabs" value="Book" className="min-w-96 h-full w-[95%] mx-auto mt-3" ref={ref}>
                <TabsHeader className='bg-eggplant'>
                    {tabHeaders.map((tabHeader) => (
                        <Tab key={tabHeader} value={tabHeader}>{tabHeader}</Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {tabHeaders.map((header) => (
                        <TabPanel key={header} value={header} className='text-eggplant dark:text-old-lace p-0'>
                            <SearchTable showUnreviewedOnly={showUnreviewedOnly}/>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </>
    )
});

export default AdminTabs;