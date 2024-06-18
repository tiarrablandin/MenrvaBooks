import { Button, Typography } from "@/providers/coreProviders";

interface AccountCardPropsType {
  title: string;
  desc: string;
  keys: string;
  label: string;
}

const data = [
  {
    title: "SMS Number",
    desc: "Opt for SMS-based authentication, where a unique code is sent to your registered mobile number.",
    keys: "+4 0123 456 789",
    label: "Edit",
  },
];

function AccountCard({ title, desc, keys, label }: AccountCardPropsType) {
  return (
    <div className="flex flex-wrap items-center justify-between py-6">
      <div>
        <p className="">
          {title}
        </p>
        <p className="font-normal mt-1">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <p
          className={`!ml-auto
          ${keys === "+4 0123 456 789" ? "!font-bold text-deep-sea dark:text-parchment/70 " : "!font-normal"}
          `}
        >
          {keys}
        </p>
        <Button size="sm" variant="outlined" className="border-eggplant dark:border-rose/70 text-deep-sea dark:text-parchment/70">
          {label}
        </Button>
      </div>
    </div>
  );
}

const Security = () => {
  return (
    <div>
      <section className="px-8 pl-16 py-12 container mx-auto text-deep-sea dark:text-parchment/70">
        <div className="flex items-start justify-between rounded-none mb-2">
          <div>
            <p className="font-semibold">
              Two-factor authentication
            </p>
            <p className="font-normal mt-1">
              Update your profile information below.
            </p>
          </div>
          <div className="flex justify-end">
            <Button className="bg-eggplant dark:bg-rose/70 text-parchment/70">enable</Button>
          </div>
        </div>
        {data.map(({ title, desc, keys, label }) => (
          <AccountCard key={title} title={title} desc={desc} keys={keys} label={label} />
        ))}
      </section>
    </div>
  );
};

export default Security;
