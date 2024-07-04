import { Card, Typography } from "@/providers/coreProviders";
import React from "react";
import CustomAccordion from "./accordion";

interface CareersProps {}

const FAQ: React.FC<CareersProps> = ({}) => {
  const accordionHeaders = [
    "What sets Menrva Books apart fom other book databases?",
    "What if the book I'm looking for doesn't show up in a search?",
    "Do I need to register to use the site?",
    "Are there more features coming to Menrva Books?",
    "Do you have an app?",
  ];
  const accordionBodies = [
    "There are a million reasons why we believe Menrva books is different (in a good way) from other book databases, but to name the biggest reason, we don't take money from authors to push them higher up in the recommendation algorithm so you're getting the most authentic search experience possible. One of the key founding principles was a simple one. What product would we want to use everyday for our book hunting if we weren't the ones designing it. We don't believe any book deserves more attention then any other, that's up to you the reader. Another founding principle was how as an author we would like to engage with our audience, that's another simple one for us. Make it easy for authors to engage with their audience, manage their book collections, and share news of their upcoming releases, blog posts and a myriad of things without having a pay to play mentality. The level of engagement will be driven by fans and authors",
    "If the book you are searching for isn't showing up in a search, chances are it hasn't been put in the database just yet. We are adding more and more every single day, so hang tight, I'm sure it will be in the library soon. If it's been awhile head over to the Contact Us page and request the book be added, and we'll add that to our priority list.",
    "Short answer, no. However, if you'd like to use some of the sites other functionality outside of just searching such as saving books to your TBR or marking books as read and numerous other features, as well as having an ad free experience, you're going to want to create an account.",
    "So many more features, a whole cornucopia! Stick around for awhile and find out. ",
    "As of right now, no. BUT it is in the works is at the top of the list to get done. We'll be releasing on the Google Play Store first, then the Apple App Store.",
  ];

  return (
    <div className="flex flex-col items-center pt-10 max-w-2/3">
      <div className="text-2xl pb-6 text-eggplant dark:text-rose/70">
        Frequently asked questions
      </div>

      <Card className="w-[80%] bg-transparent shadow-none">
        <CustomAccordion id={1} header={accordionHeaders[0]} body={accordionBodies[0]} />
        <CustomAccordion id={2} header={accordionHeaders[1]} body={accordionBodies[1]} />
        <CustomAccordion id={3} header={accordionHeaders[2]} body={accordionBodies[2]} />
        <CustomAccordion id={4} header={accordionHeaders[3]} body={accordionBodies[3]} />
        <CustomAccordion id={5} header={accordionHeaders[4]} body={accordionBodies[4]} />
      </Card>
    </div>
  );
};

export default FAQ;
