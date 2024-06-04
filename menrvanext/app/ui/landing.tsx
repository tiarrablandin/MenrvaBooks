import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography as="a" href="#" variant="small" className="font-medium">
        {children}
      </Typography>
    </li>
  );
}

export function HeroSection7() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color="transparent"
        className="absolute z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography variant="h6">Material Design</Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
          </ul>
          <div className="hidden gap-2 lg:flex">
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-github text-base" />
            </IconButton>
          </div>
          <IconButton
            variant="text"
            color="white"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              <NavItem>Home</NavItem>
              <NavItem>About Us</NavItem>
              <NavItem>Contact Us</NavItem>
            </ul>
            <div className="mt-4 flex gap-2">
              <IconButton variant="text" color="gray" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
              <IconButton variant="text" color="gray" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
              <IconButton variant="text" color="gray" size="sm">
                <i className="fa-brands fa-github text-base" />
              </IconButton>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/image/image.jpeg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-screen px-8">
          <div className="container relative my-auto mx-auto grid place-items-center text-center">
            <Typography
              variant="h1"
              color="white"
              className="text-3xl !leading-snug md:max-w-full lg:max-w-3xl lg:text-5xl"
            >
              Our company mission is to lead the mobile development
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-6 w-full max-w-3xl mb-10"
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </Typography>
            <Button variant="gradient" color="white">
              Contact us
            </Button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection7;