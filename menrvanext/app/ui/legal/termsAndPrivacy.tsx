import React from "react";
import Terms from "./terms";
import Privacy from "./privacy";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/providers";

const data = [
  {
    label: "Terms of Use",
    value: "terms",
  },
  {
    label: "Privacy Policy",
    value: "privacy",
  },
];

interface TermsAndPrivacyProps {}

const termsAndPrivacy: React.FC<TermsAndPrivacyProps> = ({}) => {
  return (
    <div>
      <Tabs value="terms" className="py-8">
        <TabsHeader className="flex justify-center bg-eggplant w-80 mx-auto">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value }) => (
            <TabPanel key={value} value={value}>
              {value === "terms" && (
                <div className="flex justify-center gap-8">
                  <Terms/>
                </div>
              )}
              {value === "privacy" && (
                <div className="flex justify-center pt-8 gap-8">
                  <Privacy/>
                </div>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default termsAndPrivacy;
