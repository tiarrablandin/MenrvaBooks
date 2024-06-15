import { Card, Typography } from "@/providers/coreProviders";
import Link from "next/link";
import React from "react";

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = ({}) => {
  return (
    <div className="flex items-center flex-col text-lg">
      <Card className="flex items-center w-[90%] shadow-none bg-transparent text-deep-sea dark:text-parchment/70">
        <Typography variant="h5" className="flex justify-center font-bold text-eggplant dark:text-rose/70">
          Privacy Policy
        </Typography>
        <div className="flex text-start pt-8 w-4/5 max-w-2/3 font-semibold">
          Effective Date:
        </div>
        <div className="flex text-start pt-4 w-4/5 max-w-2/3">
          Welcome to Menrva Books LLC. Your privacy is of paramount importance
          to us. This Privacy Policy document outlines the types of information
          that is collected and recorded by Menrva Books LLC and how we use it.
        </div>
        <div className="w-4/5 text-start pt-4">
          1. General Information
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Menrva Books LLC operates the [Insert Website URL] website, which
          provides [briefly describe service or product]. This privacy policy
          applies to all information collected through our website, mobile
          application, and/or any related services, sales, marketing, or events
          (we refer to them collectively in this privacy policy as the
          &#34;Services&#34;).
        </div>
        <div className="w-4/5 text-start pt-4">
          2. Consent
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          By using our Services, you hereby consent to our Privacy Policy and
          agree to its terms.
        </div>
        <div className="w-4/5 text-start pt-4">
          3. Information We Collect
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </div>
        <div className="flex text-start pt-4 w-4/5 max-w-2/3">
          Personal Identification Information: Including, but not limited to,
          your name, email address, phone number, and postal address.
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Usage Data: Information collected automatically through the operation
          of our Services, which may include details such as your device&#39;s
          Internet Protocol address (e.g., IP address), browser type, browser
          version, our Services pages that you visit, the time and date of your
          visit, the time spent on those pages, unique device identifiers, and
          other diagnostic data.
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Cookies and Tracking Technologies: We use cookies and similar tracking
          technologies to track the activity on our Services and we hold certain
          information. Cookies are files with a small amount of data which are
          sent to your browser from a website and stored on your device. Other
          tracking technologies are also used such as beacons, tags, and scripts
          to collect and track information and to improve and analyze our
          Service.
        </div>
        <div className="w-4/5 text-start pt-4">
          4. How We Use Your Information
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          We use the information we collect in various ways, including to:
        </div>
        <div className="flex text-start pt-4 w-4/5 max-w-2/3">
          Provide, operate, and maintain our Services
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Improve, personalize, and expand our Services
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Understand and analyze how you use our Services
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Develop new products, services, features, and functionality
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the Service, and for marketing and promotional
          purposes
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Send you emails
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Find and prevent fraud
        </div>
        <div className="w-4/5 text-start pt-4">
          5. Log Files
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          Menrva Books LLC follows a standard procedure of using log files.
          These files log visitors when they visit websites. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. This data is
          not linked to any information that is personally identifiable.
        </div>
        <div className="w-4/5 text-start pt-4">
          6. Sharing Your Personal Information
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          We do not sell, trade, or rent your personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates, and advertisers for the purposes outlined above.
        </div>
        <div className="w-4/5 text-start pt-4">
          7. Security
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          The security of your personal information is important to us, but
          remember that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your personal information, we cannot
          guarantee its absolute security.
        </div>
        <div className="w-4/5 text-start pt-4">
          8. Changes to This Privacy Policy
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </div>
        <div className="w-4/5 text-start pt-4">
          9. Contact Us
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
        If you have any questions about this Privacy Policy, please contact us:
        </div>
        <div className="flex text-start pt-4 w-4/5 max-w-2/3">
        By email: contact@menrvabooks.com
        </div>
        <div className="flex text-start w-4/5 max-w-2/3">
        By visiting this page on our website: <Link href={"/contact"}>Contact us</Link>
        </div>
        {/* <div className="flex text-start w-4/5 max-w-2/3">
        By phone number: [Insert Phone Number]
        </div>
        <div className="flex text-start pb-10 w-4/5 max-w-2/3">
        By mail: [Insert Mailing Address]
        </div> */}
      </Card>
    </div>
  );
};

export default Privacy;
