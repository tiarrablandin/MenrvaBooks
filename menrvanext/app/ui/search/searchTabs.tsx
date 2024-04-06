import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@/providers';
import React, { Ref } from 'react';

const SearchTabs = React.forwardRef(({}, ref: Ref<HTMLDivElement>) => {

    const tabsData = [
        { label: "Book", value: "book", desc: "Search for books" },
        { label: "Author", value: "author", desc: "Search for authors" },
        { label: "Genre", value: "genre", desc: "Search by genre" },
    ];

    return (
        <Tabs id="advanced-search-tabs" value="book" className="min-w-96 h-48 w-[30rem] " ref={ref}>
            <TabsHeader className='bg-eggplant'>
                {tabsData.map(({ label, value }) => (
                    <Tab key={value} value={value}>{label}</Tab>
                ))}
            </TabsHeader>
            <TabsBody >
                {tabsData.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {value === "book" && (
                            <p>Book Filters</p>
                        )}
                        {/* Placeholder content for Author and Genre tabs */}
                        {value !== "book" && <div>{desc} - Coming soon...</div>}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
});

export default SearchTabs;