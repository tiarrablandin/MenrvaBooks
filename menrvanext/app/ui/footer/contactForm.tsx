import { Button, Card, Checkbox, Input, Typography } from "@/providers";
import React from "react";

interface ContactFormProps {}

const contactForm: React.FC<ContactFormProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <Card
          className="flex items-center py-10 bg-pink-lavender dark:bg-dark:chinese-violet bg-opacity-80"
          shadow={false}
        >
          <Typography variant="h4" className="text-eggplant">
            Contact Us
          </Typography>
          <Typography className="mt-1 font-normal">
            Got a suggestion on how to make the site better? Let us know!
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" className="-mb-3 text-eggplant">
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
              <Typography variant="h6" className="-mb-3 text-eggplant">
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
              <Typography variant="h6" className="-mb-3 text-eggplant">
                Message
              </Typography>
              <Input
                type="text"
                size="lg"
                className=" !border-eggplant focus:!border-eggplant"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
            </div>
            <Button className="mt-6" fullWidth>
              submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default contactForm;
