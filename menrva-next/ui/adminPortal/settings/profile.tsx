import { ArrowUpTrayIcon, Button, Input } from "@/providers/coreProviders";

const Profile = () => {
  const cn="w-full placeholder:opacity-100 !border-eggplant dark:!border-parchment/70 text-deep-sea dark:text-parchment/70";

  return (
    <div className="text-deep-sea dark:text-parchment/70">
      {/* Avatar Upload */}
      <section className="py-12 pl-16 px-4 container mx-auto">
        <div className="flex justify-between items-start">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://www.material-tailwind.com/img/avatar1.jpg"
                alt="dark"
                className="w-14 rounded-full"
              />
              <div>
                <p className="!font-semibold mb-1">
                  Select and Upload image
                </p>
                <p className="!font-medium">
                  .svg, .png, .jpg (size 400x400px).
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="flex gap-2 bg-eggplant dark:bg-rose/70 text-parchment/70">
                <ArrowUpTrayIcon strokeWidth={2} className="h-4 w-4 text-parchment/70" />
                select avatar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Form */}
      <section className="px-8 pl-16 py-8 pb-12 container mx-auto">
        <p className="font-semibold">
          Basic Information
        </p>
        <p className="font-normal mt-1">
          Update your profile information below.
        </p>
        <div className="flex flex-col mt-8">
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p className="mb-2 font-medium">
                First Name
              </p>
              <Input
                size="lg"
                placeholder="Emma"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">
                Last Name
              </p>
              <Input
                size="lg"
                placeholder="Roberts"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Email
              </p>
              <Input
                size="lg"
                placeholder="emma@mail.com"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Confirm Email
              </p>
              <Input
                size="lg"
                placeholder="emma@mail.com"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Location
              </p>
              <Input
                size="lg"
                placeholder="Florida, USA"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Phone Number
              </p>
              <Input
                size="lg"
                placeholder="+123 0123 456 789"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Language
              </p>
              <Input
                size="lg"
                placeholder="Language"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p  className="mb-2 font-medium">
                Skills
              </p>
              <Input
                size="lg"
                placeholder="Skills"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
