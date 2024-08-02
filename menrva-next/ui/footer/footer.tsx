'use client';

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
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const isOpen = hovered || focused;

  {/* className={`transition-all duration-500 ease-in-out ${isOpen ? "bg-rose dark:bg-eggplant" : "bg-parchment dark:bg-onyx"} border-none p-0.5 relative overflow-visible z-20`} */ }
  return (
    <footer className="w-full relative mt-auto">
      <div className={` ${isOpen ? "bg-rose/80 dark:bg-eggplant" : ""} w-full`}>
        <div
          // className={`absolute w-full left-0 ${isOpen ? "bottom-full" : "bottom-0"} py-1 transition-all duration-300 ease-in-out bg-rose/80 dark:bg-eggplant`}
          className={`absolute w-full left-0 ${isOpen ? "bottom-full" : "bottom-0"} py-1 bg-rose/80 dark:bg-eggplant`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
        >
          {isOpen && (
            <div className="w-3/5 flex-row justify-between m-auto h-[95%] flex">
              {SITEMAP.map(({ title, links, routes }, key) => (
                <div key={key} className={`w-3/5 text-center flex flex-col gap-0 h-full text-nowrap ${key === 0 ? "mr-24" : "ml-24"}`}>
                  <p className="font-bold text-lg uppercase text-eggplant dark:text-rose">
                    {title}
                  </p>
                  <ul className="">
                    {links.map((link, linkKey) => (
                      <p key={linkKey} className="font-normal">
                        <Link
                          href={`/${routes[linkKey]}`}
                          className="inline-block transition-transform hover:scale-105"
                        >
                          {link}
                        </Link>
                      </p>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className="flex w-full items-center justify-between border-t border-eggplant bg-rose/80 dark:bg-eggplant dark:border-rose py-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
        >
          <p className="text-center font-normal ml-12">
            &copy; {currentYear} <a href="https://material-tailwind.com/">Menrva Books</a>. All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center justify-center mt-1 mr-12">
            {socialIconMap.map((social) => (
              <p className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer h-min" key={social.title}>
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
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
