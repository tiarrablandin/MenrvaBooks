import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@/providers";
import React from "react";

interface TeamCardProps {}

const teamCard: React.FC<TeamCardProps> = () => {
  return (
    <div>
      <div className="flex justify-center pb-10">
        <Card className="w-48 mr-4">
          <CardHeader floated={false} className="h-40">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Tiarra Blandin
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 mr-4">
          <CardHeader floated={false} className="h-40">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Matthew Tilley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Director of Infastructure
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 mr-4">
          <CardHeader floated={false} className="h-40">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Jonathan Dominguez
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Director of Sales & Marketing
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48">
          <CardHeader floated={false} className="h-40">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              William Slaunwhite
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Lead Developer
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default teamCard;
