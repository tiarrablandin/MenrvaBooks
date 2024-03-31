import React from "react";
import Terms from "./terms";
import Privacy from "./privacy";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/providers";

interface TermsAndPrivacyProps {}

const termsAndPrivacy: React.FC<TermsAndPrivacyProps> = ({}) => {
  return (
    <div>
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <Terms />
      <Privacy />
    </div>
  );
};

export default termsAndPrivacy;
