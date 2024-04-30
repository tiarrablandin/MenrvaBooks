'use client';

import { createCommentThunk } from "@/app/lib/store/commentSlice";
import { useAppDispatch } from "@/app/lib/store/store";
import { Button, Card, CardBody, HeartIcon, Input, Typography } from "@/providers";
import React, { useState } from "react";

interface ContentCardPropsType {
  img: string;
  name: string;
  desc: string;
  hours: string;
}

function ContentCard({ img, name, desc, hours }: ContentCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="grid items-center gap-6 ">
      <CardBody className="flex gap-5 p-0 ">
        <div className=" !m-0 h-full  max-h-[40px]  w-full max-w-[40px] ">
          <img src={img} alt="img" className="h-full w-full rounded object-cover object-center" />
        </div>
        <div>
          <div className="mb-3 flex items-center gap-1">
            <Typography
              variant="small"
              className=" flex items-center gap-2 font-bold !text-gray-900"
            >
              {name}
            </Typography>
            <Typography variant="small" className="font-bold !text-gray-700">
              {hours}
            </Typography>
            <Button
              size="sm"
              color="red"
              variant="text"
              className="flex shrink-0 gap-1"
            >
              <HeartIcon className="h-4 w-4" />
              243
            </Button>
          </div>
          <Typography className="mb-4 w-full font-normal !text-gray-500">{desc}</Typography>
          <div className="flex !w-full justify-end">
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function NewComment({ bookId }: { bookId: number }) {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    dispatch(createCommentThunk({ comment, bookId }))
  }

  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className=" !m-0 h-full  max-h-[40px]  w-full max-w-[40px] ">
          <img
            src="https://www.material-tailwind.com/img/avatar1.jpg"
            alt="img"
            className="h-full w-full rounded object-cover object-center"
          />
        </div>
        <Typography variant="small" className=" flex items-center gap-2 font-bold !text-gray-900">
          Tina Andrew
        </Typography>
      </div>
      <div className="mt-4 h-full flex-col pl-14">
        <Typography className=" flex items-center gap-2 !text-sm font-normal !text-blue-gray-500">
          Constructive feedback is possible while also being nice...
        </Typography>
        <form action={handleSubmit} className="flex flex-col items-end">
          <Input variant="static" value={comment} onChange={(e) => setComment(e.target.value)} />
          <Button className="mt-4 bg-eggplant text-old-lace" size="sm">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}

const contents = [
  {
    img: "https://www.material-tailwind.com/img/avatar1.jpg",
    name: "Tina Andrew",
    hours: " · 7 minutes ago",
    desc: "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome! ",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar2.jpg",
    name: "Emma Roberts",
    hours: " · 2 hours ago",
    desc: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.Don't forget, You're awesome!",
  },
];

const bookComments = ({ bookId }: { bookId: number }) => {
  return (
    <div>
      <section className="mx-auto flex w-full max-w-2xl flex-col px-5 pb-20 pt-10">
        <Typography variant="h4" className="my-6 md:my-8 md:text-center">
          Have something to say about this book?
        </Typography>
        <NewComment bookId={bookId} />
        <Typography variant="h4" className="my-8 md:text-center">
          What other readers are saying about this book...
        </Typography>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
          {contents.map(({ name, img, desc, hours }) => (
            <ContentCard key={name} name={name} desc={desc} img={img} hours={hours} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default bookComments;
