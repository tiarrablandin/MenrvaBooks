import React from "react";
import {
  EnvelopeIcon,
  Typography,
  Input,
  Textarea,
  TicketIcon,
  Checkbox,
  Button,
  Card,
  CardBody,
  PhoneIcon,
} from "@/providers";

export function Contact() {
  return (
    <section className="grid h-screen px-8 py-10">
      <div className="container mx-auto my-auto items-center place-items-center grid gap-y-10 gap-x-28 grid-cols-1 lg:grid-cols-2">
        <div className="w-full lg:max-w-lg">
          <Card shadow={true} className="lg:p-6">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-6">
                Contact us
              </Typography>
              <form action="#" className="flex flex-col gap-6">
                <div className="grid gap-4 grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    label="First Name"
                    name="first-name"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    label="Last Name"
                    name="last-name"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  label="Phone Number"
                  name="phone"
                />
                <Textarea
                  color="gray"
                  size="lg"
                  rows={7}
                  label="Message"
                  name="message"
                />
                <Checkbox
                  color="gray"
                  label={
                    (
                      <Typography className="font-normal text-base !text-gray-500 -mt-6">
                        You agree to our{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:text-gray-900"
                        >
                          Privacy Policy
                        </a>
                        .
                      </Typography>
                    ) as any
                  }
                  containerProps={{
                    className: "-ml-2.5 -mt-6",
                  }}
                />
                <Button size="lg" color="gray" className="mt-4" fullWidth>
                  send message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className="w-full lg:pb-0 pb-2">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-4xl"
          >
            Get in Touch
          </Typography>
          <Typography className="mb-16 max-w-md !font-normal !text-gray-500">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </Typography>
          <div className="flex items-center gap-5">
            <PhoneIcon className="h-5 w-5" />
            <Typography variant="h6">+1(424) 535 3523</Typography>
          </div>
          <div className="my-4 flex items-center gap-5">
            <EnvelopeIcon className="h-5 w-5" />
            <Typography variant="h6">hello@mail.com</Typography>
          </div>
          <div className="flex items-center gap-5 mb-6">
            <TicketIcon className="h-5 w-5" />
            <Typography variant="h6">Open Support Ticket</Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;