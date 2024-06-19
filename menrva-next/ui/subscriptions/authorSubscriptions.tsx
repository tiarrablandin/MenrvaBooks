import React from "react";
import SubCard from "./subCard";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/providers/coreProviders";
import Link from "next/link";

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
        <TabsHeader
          className="flex justify-center text-parchment/70 bg-eggplant dark:bg-rose/70 w-80 mx-auto"
          indicatorProps={{ className: "bg-eggplant dark:bg-rose/70" }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex text-center ">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="text-deep-sea dark:text-parchment/70">
              <div className="text-xl">{desc}</div>
              {value === "annual" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Scribe"}
                    price={"Free"}
                    info={["Unlimited searches", "Genre recommendations"]}
                  />
                  {/* <SubCard
                    header={"Wordsmith"}
                    price={"$11.99/yr"}
                    info={[
                      "Scribe PLUS:",
                      "No ads",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  /> */}
                  {/* <SubCard
                    header={"Literary Luminary"}
                    price={"$29.99/yr"}
                    info={[
                      "Wordsmith PLUS:",
                      "No ads",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  /> */}
                </div>
              )}
              {value === "monthly" && (
                <div className="flex justify-center pt-8 gap-8">
                  <SubCard
                    header={"Scribe"}
                    price={"Free"}
                    info={["Unlimited searches", "Genre recommendations"]}
                  />
                  {/* <SubCard
                    header={"Wordsmith"}
                    price={"$1.99/mo"}
                    info={[
                      "Scribe PLUS:",
                      "No ad's",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  /> */}
                  {/* <SubCard
                    header={"Literary Luminary"}
                    price={"$3.99/mo"}
                    info={[
                      "Wordsmith PLUS:",
                      "No ad's",
                      "Personalized recommendations",
                      "Book tracking",
                      "Release notifications",
                      "Commenting",
                    ]}
                  /> */}
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
