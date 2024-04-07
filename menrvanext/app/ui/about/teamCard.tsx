import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@/providers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamCardProps {}

const teamCard: React.FC<TeamCardProps> = () => {
  return (
    <div>
      <div className="flex justify-center pb-10">
        <Card className="w-48 mr-4  bg-pink-lavender/80 dark:bg-chinese-violet">
          <CardHeader floated={false} className="h-40">
            <Image
              src="https://i.imgur.com/Lh3nQna.jpg"
              alt="profile-picture"
              height={200}
              width={200}
            />
          </CardHeader>
          <CardBody className="text-center">
            <a
              href="https://linkedin.com/in/tiarrablandin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Typography variant="h6" className="mb-2 hover:scale-105">
                Tiarra Blandin
              </Typography>
            </a>
            <Typography className="font-medium" textGradient>
              CEO / Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 mr-4  bg-pink-lavender/80 dark:bg-chinese-violet">
          <CardHeader floated={false} className="h-40">
            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <a
              href="https://www.linkedin.com/in/matthewt77/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Typography variant="h6" className="mb-2 hover:scale-105">
                Matthew Tilley
              </Typography>
            </a>
            <Typography className="font-medium" textGradient>
              Director of Infastructure
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 mr-4  bg-pink-lavender/80 dark:bg-chinese-violet">
          <CardHeader floated={false} className="h-40">
            <Image
              src="https://i.imgur.com/a5ad9WW.jpg"
              alt="profile-picture"
              height={200}
              width={200}
            />
          </CardHeader>
          <CardBody className="text-center">
            <a
              href="https://linkedin.com/in/jonathan-dominguez-a4148a168"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Typography variant="h6" className="mb-2 hover:scale-105">
                Jonathan Dominguez
              </Typography>
            </a>
            <Typography className="font-medium" textGradient>
              Director of Sales & Marketing
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48  bg-pink-lavender/80 dark:bg-chinese-violet">
          <CardHeader floated={false} className="h-40">
            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <a
              href="https://linkedin.com/in/willslaunwhite"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Typography variant="h6" className="mb-2 hover:scale-105">
                William Slaunwhite
              </Typography>
            </a>
            <Typography className="font-medium" textGradient>
              Lead Developer
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default teamCard;
