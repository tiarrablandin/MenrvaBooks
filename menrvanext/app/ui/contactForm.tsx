"use client";

import { Button, Card, Input, Textarea, Typography } from "@/providers";
import React, { useState } from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log (data)
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center items-center max-h-screen h-[70vh]">
      <Card
        className="flex items-center p-10 bg-transparent"
        shadow={false}
      >
        <Typography variant="h4" className="">
          Contact Us
        </Typography>
        <Typography className="mt-1 font-normal">
          Got a suggestion on how to make the site better? Let us know!
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-old-lace" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              value={name}
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h6" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              value={email}
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6" className="-mb-3">
              Message
            </Typography>
            <Textarea
              size="lg"
              value={message}
              className=" !border-eggplant focus:!border-eggplant dark:text-old-lace"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setMessage(e.target.value)}
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
