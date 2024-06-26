import { Switch } from "@/providers/coreProviders";

const TABLE_HEAD = ["Activity", "Email", "Push", "SMS"];

const TABLE_ROW = [
  {
    title: "Mentions",
    desc: "Notify when another user mentions you in a comment",
  },
  {
    title: "Comments",
    desc: "Notify when another user comments your item",
  },
  {
    title: "Login",
    desc: "Log in from a new device.",
  },
];

const Notifications = () => {
  return (
    <div>
      <section className="px-8 pl-16 py-12 container mx-auto text-deep-sea dark:text-parchment/70">
        <div>
          <p className="font-semibold">Notifications</p>
          <p className="mt-1 !font-normal">
            Choose how you receive notifications. These notification settings apply to the things
            you&apos;re watching.
          </p>
        </div>
        <div className="overflow-x-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-eggplant/20 !py-6 pr-8">
                    <p className="!font-bold">{head}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROW.map(({ title, desc }, index) => {
                const isLast = index === TABLE_ROW.length - 1;
                const classes = isLast ? "!py-4" : "!py-4 pr-8 !border-b border-eggplant/20";

                return (
                  <tr key={title}>
                    <td className={classes}>
                      <p className="font-bold">{title}</p>
                      <p className="mt-1 font-normal">{desc}</p>
                    </td>
                    <td className={classes}>
                      <Switch
                        defaultChecked
                        className="bg-rose/70 checked:bg-rose dark:checked:bg-rose/40"
                        containerProps={{
                          className: "mr-3",
                        }}
                        circleProps={{
                          className:
                            "before:hidden border-none bg-eggplant dark:bg-parchment/70 ",
                        }}
                      />
                    </td>
                    <td className={classes}>
                    <Switch
                        className="bg-rose/70 checked:bg-rose dark:checked:bg-rose/40"
                        containerProps={{
                          className: "mr-3",
                        }}
                        circleProps={{
                          className:
                            "before:hidden border-none bg-eggplant dark:bg-parchment/70 ",
                        }}
                      />
                    </td>
                    <td className={classes}>
                    <Switch
                        className="bg-rose/70 checked:bg-rose dark:checked:bg-rose/40"
                        containerProps={{
                          className: "mr-3",
                        }}
                        circleProps={{
                          className:
                            "before:hidden border-none bg-eggplant dark:bg-parchment/70 ",
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
