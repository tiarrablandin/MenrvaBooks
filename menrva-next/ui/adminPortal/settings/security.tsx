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
    <div className="flex flex-wrap items-center justify-between border-b border-b-gray-200 py-6">
      <div>
        <p color="blue-gray">
          {title}
        </p>
        <p className="text-gray-600 font-normal mt-1">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <p
          className={`!ml-auto
          ${keys === "+4 0123 456 789" ? "!font-bold text-eggplant " : "!font-normal"}
          `}
        >
          {keys}
        </p>
        <Button size="sm" variant="outlined" className="text-eggplant">
          {label}
        </Button>
      </div>
    </div>
  );
}

const Security = () => {
  return (
    <div>
      <section className="px-8 pl-16 py-16 container mx-auto">
        <div className="flex items-start justify-between rounded-none mb-2">
          <div>
            <p className="text-2xl">
              Two-factor authentication
            </p>
            <p className="text-gray-600 font-normal mt-1">
              Update your profile information below.
            </p>
          </div>
          <div className="mt-7 flex justify-end">
            <Button className="bg-eggplant text-old-lace">enable</Button>
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
