import { Card, Typography } from "@/providers/coreProviders";
import React from "react";

interface TermsProps {}

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <div className="flex items-center flex-col text-lg">
      <Card className="flex items-center w-[90%] shadow-none bg-transparent text-lg text-deep-sea dark:text-parchment/70">
        <Typography
          variant="h5"
          className="flex justify-center pt-8 font-bold text-eggplant dark:text-rose/70"
        >
          Terms of Use
        </Typography>
        <p className="w-4/5 text-start pt-8">1. Introduction</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          Welcome to Menrva Books LLC ("Menrva Books", "we", "us"). By accessing our website at
          [Your Website URL], any related mobile device application, or any other service we provide
          (collectively, the "Service"), you agree to be bound by these Terms of Use ("Terms").
          These Terms affect your legal rights and obligations, so if you do not agree to them, do
          not use our Service.
        </p>
        <p className="w-4/5 text-start pt-4">2. User Requirements</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          You must be at least 13 years old to use our Service. By agreeing to these Terms, you
          represent and warrant that you are of legal age to form a binding contract with us.
        </p>
        <p className="w-4/5 text-start pt-4">3. Use of Service</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and
          revocable license to use our Service for your personal, non-commercial use.
        </p>
        <p className="w-4/5 text-start pt-4">4. User Content</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          You may be able to submit content, including text, images, and videos. You retain all
          rights to your content, but you grant us a worldwide, royalty-free license to use,
          reproduce, distribute, modify, and display this content in connection with the Service.
        </p>
        <p className="w-4/5 text-start pt-4">5. Prohibited Conduct</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          You agree not to engage in the following activities: Illegal activities or promoting
          illegal activities. Posting harmful, threatening, abusive, or harassing content.
          Transmitting viruses, malware, or other malicious code. Attempting to interfere with the
          Service's operation.
        </p>
        <p className="w-4/5 text-start pt-4">6. Disclaimers</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          The Service is provided "as is" and "as available" without any warranties, expressed or
          implied. We do not guarantee the accuracy, completeness, or timeliness of the information
          on our Service.
        </p>
        <p className="w-4/5 text-start pt-4">7. Limitation of Liability</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          In no event will we be liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the Service.
        </p>
        <p className="w-4/5 text-start pt-4">8. Indemnification</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          You agree to indemnify and hold us harmless from any claims, damages, and expenses,
          including attorney's fees, arising from your use of the Service or violation of these
          Terms.
        </p>
        <p className="w-4/5 text-start pt-4">9. Changes to Terms</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          We reserve the right to modify these Terms at any time. Your continued use of the Service
          following any changes indicates your acceptance of the new Terms.
        </p>
        <p className="w-4/5 text-start pt-4">10. Termination</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          We may terminate or suspend your access to the Service immediately, without prior notice
          or liability, for any reason whatsoever, including without limitation if you breach the
          Terms.
        </p>
        <p className="w-4/5 text-start pt-4">11. Governing Law</p>
        <p className="flex text-start w-4/5 max-w-2/3">
          These Terms shall be governed by the laws of [Your Jurisdiction] without regard to its
          conflict of law provisions.
        </p>
        <p className="w-4/5 text-start pt-4">12. Contact Us</p>
        <p className="flex text-start pb-10 w-4/5 max-w-2/3">
          If you have any questions about these Terms, please contact us at contact@menrvabooks.com.
        </p>
      </Card>
    </div>
  );
};

export default Terms;
