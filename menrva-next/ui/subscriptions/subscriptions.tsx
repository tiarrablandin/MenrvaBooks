import React from "react";
import SubCard from "./subCard";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/providers/coreProviders";

const data = [
  {
    label: "Annual",
    value: "annual",
    desc: `Save money by subscribing for the year!`,
  },
  {
    label: "Monthly",
    value: "monthly",
    desc: `Low monthly charge for access to all of the awesome stuff Menrva has to offer!`,
  },
];

const Subscriptions = () => {
  return (
    <div className="">
      <Tabs value="annual" className="py-8">
        <TabsHeader className="flex justify-center text-parchment/70 bg-eggplant dark:bg-rose/70 w-80 mx-auto" indicatorProps={{ className:"bg-eggplant dark:bg-rose/70"}}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-old-lace">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex text-center ">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="text-deep-sea dark:text-parchment/70">
              {desc}
              {value === "annual" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Basic"}
                    price={"Free"}
                    info={["Unlimited searches", "Genre recommendations"]}
                  />
                  <SubCard
                    header={"Bookworm"}
                    price={"$11.99/yr"}
                    info={[
                      "BASIC PLUS:",
                      "No ads",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  />
                  {/* <SubCard header={"Bibliophile"} price={$23.99/yr} info={["BOOKWORM PLUS:", "Access to community forums"]} /> */}
                </div>
              )}
              {value === "monthly" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Basic"}
                    price={"Free"}
                    info={["Unlimited searches", "Genre recommendations"]}
                  />
                  <SubCard
                    header={"Bookworm"}
                    price={"$1.99/mo"}
                    info={[
                      "BASIC PLUS:",
                      "No ad's",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  />
                  {/* <SubCard header={"Bibliophile"} price={"$2.99/mo"} info={["BOOKWORM PLUS:", "Access to community forums"]} /> */}
                </div>
              )}
              {value === "authors" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Wordsmith"}
                    price={"$1.99/mo"}
                    info={["Customizable author landing page", "Blog"]}
                  />
                  {/* <SubCard header={"Literary Luminary"} price={"3.99"} info={["WORD WIZARD PLUS:", ""]} /> */}
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
