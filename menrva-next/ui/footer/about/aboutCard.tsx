/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody, CardHeader, Typography } from "@/providers/coreProviders";
import React from "react";

interface AboutCardProps {}

const aboutCard: React.FC<AboutCardProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-center items-start py-10">
        <Card className="w-full max-w-[68rem] flex-row bg-pink-lavender/80 dark:bg-chinese-violet tracking-wide">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2">
              About Menrva Books
            </div>
            <div className="mb-8 tracking-wide font-normal">
              Welcome to Menrva Books, your ultimate destination for book lovers
              and creators everywhere.
            </div>
            <div className="mb-8 font-normal">
              Born out of a passion for literature and a desire to create a
              vibrant community of readers, Menrva Books is poised to
              revolutionize the way you discover, share, and discuss your
              favorite books.
            </div>
            <div className="mb-8 font-normal">
              At Menrva, we believe that reading is more than just a solitary
              activity—it's a shared experience that connects people across the
              globe. Whether you're an avid reader looking for your next
              literary adventure or a casual reader seeking inspiration, our
              platform offers a plethora of features to cater to your every
              need. Discover new books tailored to your interests with
              personalized recommendations powered by our advanced algorithms.
              Engage in lively discussions with fellow book enthusiasts through
              our vibrant community forums. Keep track of your reading progress,
              and share your thoughts and reviews with fellow readers.
            </div>
            <div className="mb-8 font-normal">
              But Menrva Books is more than just a platform—it's a celebration
              of the written word and the diverse voices that enrich our
              literary landscape. Join us on a journey of exploration and
              discovery as we embark on this literary adventure together.
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default aboutCard;
