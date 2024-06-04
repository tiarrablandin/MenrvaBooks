import {
  Typography
} from "@/providers";
import ContactForm from "./contactForm";

export function Contact() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const response = await fetch("/api/sendEmail", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ firstName, lastName, email, message }),
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data);
  //     alert("Message sent successfully!");
  //   } else {
  //     alert("Failed to send message.");
  //   }
  // };

  return (
    <section className="grid px-8 py-10 max-h-screen h-[70vh]">
      <div className="container mx-auto my-auto items-center place-items-center grid gap-y-10 gap-x-28 grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        {/* <div className="w-full lg:max-w-lg">
          <Card shadow={true} className="bg-pink-lavender/50 dark:bg-chinese-violet/50 lg:p-6">
            <CardBody>
              <Typography variant="h4" className="text-2xl mb-6">
                Contact us
              </Typography>
              <form action="#" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 grid-cols-2">
                  <Input
                    size="lg"
                    label="First Name"
                    name="first-name"
                    labelProps={{
                      className: "pl-4 min-w-full before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    size="lg"
                    label="Last Name"
                    name="last-name"
                    labelProps={{
                      className: "pl-4 min-w-full before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <Input
                  size="lg"
                  label="Email"
                  name="email"
                  labelProps={{
                    className: "pl-4 before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  size="lg"
                  rows={7}
                  label="Message"
                  name="message"
                  labelProps={{
                    className: "pl-4 before:content-none after:content-none",
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Checkbox
                  label={
                    (
                      <Typography className="font-normal text-base -mt-6">
                        You agree to our{" "}
                        <a href="/legal" className="font-medium hover:text-gray-900 hover:underline underline-offset-2">
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
                <Button type="submit" size="lg" className="font-normal mt-4 bg-eggplant text-old-lace" fullWidth>
                  send message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div> */}
        <div className="w-full lg:pb-0 pb-2">
          <Typography variant="h2" className="mb-4 !text-3xl lg:!text-4xl">
            Get in Touch
          </Typography>
          <Typography className="mb-16 max-w-md !font-normal">
            You need more information? Check what other persons are saying about our product. They
            are very happy with their purchase.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Contact;
