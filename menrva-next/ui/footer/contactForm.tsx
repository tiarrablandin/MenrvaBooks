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
        className="flex items-center p-10 bg-transparent"
        shadow={false}
      >
        <p className="">
          Contact Us
        </p>
        <p className="mt-1 font-normal">
          Got a suggestion on how to make the site better? Let us know!
        </p>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-old-lace"
          action={async (formData: FormData) => {
            'use server';
            const response = await sendEmail(formData);
            console.log(response);
          }}>
          <div className="mb-1 flex flex-col gap-6">
            <p className="-mb-3">
              Your Name
            </p>
            <Input
              size="lg"
              placeholder="John Doe"
              name="name"
              id="name"
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="-mb-3">
              Your Email
            </p>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              id="email"
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="-mb-3">
              Message
            </p>
            <Textarea
              size="lg"
              name="message"
              id="message"
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6 bg-eggplant text-old-lace" fullWidth>
            submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
