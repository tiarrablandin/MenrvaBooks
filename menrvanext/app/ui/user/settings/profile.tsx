import { ArrowUpTrayIcon, Button, Input, Select, Typography } from "@/providers";
import React from "react";

const Profile = () => {
  return (
    <div>
      {/* Avatar Upload */}
      <section className="pt-12 pb-4 pl-16 px-4 container mx-auto">
        <div className="flex justify-between items-start">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://www.material-tailwind.com/img/avatar1.jpg"
                alt="dark"
                className="w-14 rounded-full"
              />
              <div>
                <Typography color="blue-gray" className="!font-semibold mb-1">
                  Select image
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="flex gap-2 bg-eggplant text-old-lace">
                <ArrowUpTrayIcon strokeWidth={2} className="h-4 w-4 text-old-lace" />
                select avatar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Form */}
      <section className="px-8 pl-16 py-2 container mx-auto">
        <Typography variant="h5" color="blue-gray">
          Basic Information
        </Typography>
        <Typography variant="small" className="text-gray-600 font-normal mt-1">
          Update your profile information below.
        </Typography>
        <div className="flex flex-col mt-8">
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                First Name
              </Typography>
              <Input
                size="lg"
                placeholder="Emma"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
            </div>
            <div className="w-full">
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                Last Name
              </Typography>
              <Input
                size="lg"
                placeholder="Roberts"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="emma@mail.com"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
