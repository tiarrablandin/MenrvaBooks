import React from "react";
import SubCard from "./subCard";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/providers";

const data = [
  {
    label: "Readers",
    value: "readers",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Authors",
    value: "authors",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

const Subscriptions = () => {
  return (
    <div className="">
      <Tabs value="readers" className="py-8">
        <TabsHeader className="flex justify-center bg-eggplant w-80 mx-auto">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex text-center ">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="text-eggplant dark:text-old-lace">
              {desc}
              {value === "readers" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Basic"}
                    price={0.0}
                    info={["Unlimited database searches", "Genre recommendations"]}
                  />
                  <SubCard
                    header={"Bookworm"}
                    price={0.99}
                    info={[
                      "BASIC PLUS:",
                      "No ad's",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  />
                  {/* <SubCard header={"Bibliophile"} price={2.99} info={["BOOKWORM PLUS:", "Access to community forums"]} /> */}
                </div>
              )}
              {value === "authors" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Wordsmith"}
                    price={1.99}
                    info={["Customizable author landing page", "Blog"]}
                  />
                  {/* <SubCard header={"Literary Luminary"} price={3.99} info={["WORD WIZARD PLUS:", ""]} /> */}
                </div>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Subscriptions;
