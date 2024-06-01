"use client"

import { Author } from '@/lib/models/author';
import { Avatar, Card, CardBody, CardHeader, Typography } from "@/providers/coreProviders";
import React from 'react';
import ToggleFollowAuthorButton from './toggleFollowAuthorButton';
import SocialLink from './socialLink';

const AuthorCard: React.FC<{ author: Author }> = ({ author }) => {

  return (
    <div>
      <Card className="h-72 w-full min-w-[40rem] max-w-[40rem] px-4 bg-pink-lavender/70 dark:bg-chinese-violet">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="xxl"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <p>
                {author.penName}
              </p>
              <div className="flex items-center gap-0">
                <ToggleFollowAuthorButton id={author.id} />
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              {author.socialMedia.map(social => (
                <SocialLink key={social.id} name={social.name} link={social.link} />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <p>
            {author.bio}
          </p>
        </CardBody>
      </Card>
    </div>
  )
}

export default AuthorCard