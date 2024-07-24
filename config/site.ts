export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Orchestre Philharmonique du Maroc",
  description: "La référence de la musique classique au Maroc.",
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
    [
      {
        label: "Saison 23/24",
        href: "/saison2324",
      },
      {
        label: "Weekends de l'OPM",
        href: "/musique_de_chambre",
      },
      {
        label: "Conditions Générales de Vente",
        href: "/conditions_generales_de_vente",
      },
    ],
    [
      {
        label: "L'Orchestre",
        href: "/orchestre",
      },
      {
        label: "Nos Partenaires",
        href: "/partenaires",
      },
      {
        label: "Contactez-Nous",
        href: "/contact",
      },
    ]
  ],
  links: {
    facebook: "https://www.facebook.com/ConcertsOPM",
    instagram: "https://www.instagram.com/orchestre_philharmonique_maroc/",
    youtube: "https://www.youtube.com/channel/UCB_g5kRjIK-sFM3K6KF6JCg",
  },
};
