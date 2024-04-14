import { Card, Typography } from "@/providers";
import React from "react";

interface TermsProps {}

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <div className="flex items-center flex-col">
      <Card className="flex items-center w-[90%] shadow-none bg-transparent">
        <Typography variant="h3" className="flex justify-center pt-8">
          Terms of Use
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-8">
          1. Introduction
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          Welcome to Menrva Books LLC ("Menrva Books", "we", "us"). By accessing
          our website at [Your Website URL], any related mobile device
          application, or any other service we provide (collectively, the
          "Service"), you agree to be bound by these Terms of Use ("Terms").
          These Terms affect your legal rights and obligations, so if you do not
          agree to them, do not use our Service.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          2. User Requirements
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          You must be at least 13 years old to use our Service. By agreeing to
          these Terms, you represent and warrant that you are of legal age to
          form a binding contract with us.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          3. Use of Service
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          Subject to these Terms, we grant you a limited, non-exclusive,
          non-transferable, and revocable license to use our Service for your
          personal, non-commercial use.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          4. User Content
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          You may be able to submit content, including text, images, and videos.
          You retain all rights to your content, but you grant us a worldwide,
          royalty-free license to use, reproduce, distribute, modify, and
          display this content in connection with the Service.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          5. Prohibited Conduct
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          You agree not to engage in the following activities: Illegal
          activities or promoting illegal activities. Posting harmful,
          threatening, abusive, or harassing content. Transmitting viruses,
          malware, or other malicious code. Attempting to interfere with the
          Service's operation.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          6. Disclaimers
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          The Service is provided "as is" and "as available" without any
          warranties, expressed or implied. We do not guarantee the accuracy,
          completeness, or timeliness of the information on our Service.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          7. Limitation of Liability
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          In no event will we be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your
          use of the Service.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          8. Indemnification
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          You agree to indemnify and hold us harmless from any claims, damages,
          and expenses, including attorney's fees, arising from your use of the
          Service or violation of these Terms.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          9. Changes to Terms
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          We reserve the right to modify these Terms at any time. Your continued
          use of the Service following any changes indicates your acceptance of
          the new Terms.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          10. Termination
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          We may terminate or suspend your access to the Service immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the Terms.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          11. Governing Law
        </Typography>
        <Typography className="flex text-start w-4/5 max-w-2/3">
          These Terms shall be governed by the laws of [Your Jurisdiction]
          without regard to its conflict of law provisions.
        </Typography>
        <Typography variant="h6" className="w-4/5 text-start pt-4">
          12. Contact Us
        </Typography>
        <Typography className="flex text-start pb-10 w-4/5 max-w-2/3">
          If you have any questions about these Terms, please contact us at
          [Your Contact Information].
        </Typography>
      </Card>
    </div>
  );
};

export default Terms;
