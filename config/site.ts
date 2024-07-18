export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Saison 23/24",
      href: "/saison2324",
    },
    {
      label: "L'Orchestre",
      href: "/orchestre",
    },
    {
      label: "Partenaires",
      href: "/partenaires",
    },
    {
      label: "En Images",
      href: "/en-images",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Saison 23/24",
      href: "/saison2324",
    },
    {
      label: "L'Orchestre",
      href: "/orchestre",
    },
    {
      label: "Partenaires",
      href: "/partenaires",
    },
    {
      label: "En Image",
      href: "/en-image",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  footerItems: [
    {
      label: "Conditions Générales de Vente",
      href: "/conditions_generales_de_vente",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
