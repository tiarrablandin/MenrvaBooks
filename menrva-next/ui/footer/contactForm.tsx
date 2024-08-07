import { sendEmail } from "@/lib/actions/sendEmail";
import { Button, Card, Input, Textarea, Typography } from "@/providers/coreProviders";
import React from "react";

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = ({ }) => {

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const response = await fetch('/api/sendEmail', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, message }),
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log (data)
  //     alert("Message sent successfully!");
  //   } else {
  //     alert("Failed to send message.");
  //   }
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const name = formData.get('name') as string;
  //   const email = formData.get('email') as string;
  //   const message = formData.get('message') as string;
  //   const response = await sendEmail(name, email, message);
  //   console.log(response);
  // }

  return (
    <div className="flex justify-center items-center max-h-screen h-[70vh]">
      <Card
        className="flex items-center p-10 bg-transparent text-deep-sea dark:text-parchment/70"
        shadow={false}
      >
        <Typography variant="h5" className="text-eggplant dark:text-rose/70">
          Contact Us
        </Typography>
        <div className="mt-1 font-normal">
          Got a suggestion on how to make the site better? Let us know!
        </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-old-lace"
          action={sendEmail}>
          <div className="mb-1 flex flex-col gap-6">
            <div className="-mb-3">
              Your Name
            </div>
            <Input
              size="lg"
              placeholder="John Doe"
              name="name"
              id="name"
              className="!border-eggplant focus:!border-eggplant dark:!border-rose/70 dark:focus:!border-rose/70 text-deep-sea dark:text-parchment/70"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="-mb-3">
              Your Email
            </div>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              id="email"
              className="!border-eggplant focus:!border-eggplant dark:!border-rose/70 dark:focus:!border-rose/70 text-deep-sea dark:text-parchment/70"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="-mb-3">
              Message
            </div>
            <Textarea
              size="lg"
              name="message"
              id="message"
              className="!border-eggplant focus:!border-eggplant dark:!border-rose/70 dark:focus:!border-rose/70 text-deep-sea dark:text-parchment/70"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6 bg-eggplant text-parchment dark:bg-rose/70" fullWidth>
            submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
