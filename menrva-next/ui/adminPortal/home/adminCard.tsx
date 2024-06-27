import { User } from "@/lib/models/user";
import { Avatar, Card, CardBody, CardHeader, Typography } from "@/providers/coreProviders";
import React from "react";

const adminCard: React.FC<{ user: User; token: string | undefined }> = ({ user, token }) => {
  return (
    <div>
      <Card className="h-72 w-full min-w-[40rem] max-w-[40rem] px-4 bg-deep-sea/70 text-parchment/70">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8 dark:text-old-lace"
        >
          <Avatar
            size="xxl"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex justify-start items-center gap-2 text-parchment/70">
              <Typography className="text-2xl">Hello</Typography>
              <p className="text-xl ">{user.firstName}</p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <p></p>
        </CardBody>
      </Card>
    </div>
  );
};

export default adminCard;
