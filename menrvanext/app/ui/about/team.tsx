import { Card, CardBody, Avatar, IconButton, Typography } from "@/providers";
import Link from "next/link";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  linkedin: string;
}

function TeamCard({ img, name, title, linkedin }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="text-center">
        <Avatar
          src={img}
          alt={name}
          variant="circular"
          size="xxl"
          className="mx-auto mb-6 object-top"
        />
        <Typography variant="h5" className="!font-medium">
          {name}
        </Typography>
        <Typography
          color="gray"
          variant="small"
          className="mb-2 text-lg !font-semibold"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-1.5">
          <Link href={linkedin}>
            <IconButton variant="text">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `https://i.imgur.com/Lh3nQna.jpg`,
    name: "Tiarra Blandin",
    title: "Founder",
    linkedin: "https://linkedin.com/in/tiarrablandin",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Matthew Tilley",
    title: "Director of Infrastructure",
    linkedin: "https://www.linkedin.com/in/matthewt77/",
  },
  {
    img: `https://i.imgur.com/a5ad9WW.jpg`,
    name: "Jonathan Dominguez",
    title: "Director of Sales & Marketing",
    linkedin: "https://linkedin.com/in/jonathan-dominguez-a4148a168",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "William Slaunwhite",
    title: "Lead Developer",
    linkedin: "https://linkedin.com/in/willslaunwhite",
  },
];

export function Team() {
  return (
    <section className="container mx-auto py-8 px-8 lg:py-10">
      <div className="mb-8 text-center lg:mb-10">
        <Typography variant="h2" className="mb-4 text-3xl lg:text-5xl">
          The Executive Team
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-4xl">
          This is the paragraph where you can write more details about your team. Keep you user
          engaged by providing meaningful information.
        </Typography>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((props, key) => (
          <TeamCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Team;
