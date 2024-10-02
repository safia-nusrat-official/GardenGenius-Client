export type SiteConfig = typeof siteConfig;
const sharedNavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Feed",
    href: "/feed",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];
export const siteConfig = {
  name: "GardenGenius",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: sharedNavItems,
  navMenuItems: sharedNavItems,
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
