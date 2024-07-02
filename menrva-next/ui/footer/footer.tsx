import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faThreads,
  faTiktok,
  faTwitter,
  FontAwesomeIcon,
} from "@/providers/coreProviders";
import Link from "next/link";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Join Our Team", "Newsroom", "Legal & Privacy"],
    routes: ["about", "careers", "news", "legal"],
  },
  {
    title: "Help & Support",
    links: ["Contact Us", "FAQ", "Pricing"],
    routes: ["contact", "faq", "subscriptions"],
  },
];

const socialIconMap = [
  { title: "Facebook", icon: faFacebook, link: "https://www.facebook.com" },
  { title: "Instagram", icon: faInstagram, link: "https://www.instagram.com/menrvabooks/?hl=en" },
  { title: "Threads", icon: faThreads, link: "https://www.threads.net" },
  { title: "Twitter", icon: faTwitter, link: "https://x.com/MenrvaBooks" },
  { title: "Snapchat", icon: faSnapchat, link: "https://www.snapchat.com" },
  { title: "TikTok", icon: faTiktok, link: "https://www.tiktok.com" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full bg-rose/80 dark:bg-eggplant h-[16rem] relative bottom-0">
      <div className="w-full max-w-7xl px-8 h-full flex flex-col">
        <div className="w-2/3 flex flex-row justify-start">
          {SITEMAP.map(({ title, links, routes }, key) => (
            <div key={key} className="w-3/5 text-start">
              <p className="py-2 pt-4 font-bold text-lg uppercase text-eggplant dark:text-rose">
                {title}
              </p>
              <ul className="">
                {links.map((link, key) => (
                  <p key={key} className="font-normal">
                    <Link
                      href={`/${routes[key]}`}
                      className="inline-block pt-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </Link>
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-eggplant dark:border-rose md:flex-row md:justify-between mt-6">
          <p className="my-2 md:pt-2 text-center font-normal">
            &copy; {currentYear} <a href="https://material-tailwind.com/">Menrva Books</a>. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 md:pt-2 sm:justify-center">
            {
              socialIconMap.map((social) => {
                return (
                  <p className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer" key={social.title}>
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="h-5 w-5 text-deep-sea dark:text-parchment/70 hover:text-rose"
                      />
                    </Link>
                  </p>
                );
              })
              // < className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer">
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
