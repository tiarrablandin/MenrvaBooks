import React, { Ref, forwardRef } from 'react';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@/providers';

interface TabData {
    label: string;
    value: string;
    desc: string;
}

const SearchTabs = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const tabsData: TabData[] = [
        { label: "Book", value: "book", desc: "Search for books" },
        { label: "Author", value: "author", desc: "Search for authors" },
        { label: "Genre", value: "genre", desc: "Search by genre" },
    ];

    return (
        <Tabs id="advanced-search-tabs" value="book" className="min-w-96 h-48 w-[30rem]" ref={ref}>
            <TabsHeader className='bg-eggplant'>
                {tabsData.map(({ label, value }) => (
                    <Tab key={value} value={value}>{label}</Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {tabsData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className='text-eggplant dark:text-old-lace'>
                        {value === "book" && (
                            <p>Book Filters</p>
                        )}
                        {value !== "book" && <div>{desc} - Coming soon...</div>}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
});

SearchTabs.displayName = "SearchTabs";

export default SearchTabs;
