import { Button, Card, Checkbox, Input, Textarea, Typography } from "@/providers";
import React from "react";

interface ContactFormProps {}

const contactForm: React.FC<ContactFormProps> = ({}) => {
  return (
      <div className="flex justify-center items-center max-h-screen h-[70vh]">
        <Card
          className="flex items-center p-10 bg-pink-lavender/70 dark:bg-chinese-violet"
          shadow={false}
        >
          <Typography variant="h4" className="">
            Contact Us
          </Typography>
          <Typography className="mt-1 font-normal">
            Got a suggestion on how to make the site better? Let us know!
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-eggplant focus:!border-eggplant"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
              <Typography variant="h6" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-eggplant focus:!border-eggplant"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
              <Typography variant="h6" className="-mb-3">
                Message
              </Typography>
              <Textarea
                size="lg"
                className=" !border-eggplant focus:!border-eggplant"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="mt-6 bg-eggplant" fullWidth>
              submit
            </Button>
          </form>
        </Card>
      </div>
  );
};

export default contactForm;
