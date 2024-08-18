import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { siteConfig } from "@/config/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";

interface FooterItem {
  href: string;
  label: string;
}

interface SiteConfig {
  links: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  footerItems: FooterItem[][];
}

export const Footer = () => {
  const { links, footerItems }: SiteConfig = siteConfig;

  return (
    <footer className="text-center lg:text-start text-white bg-gray-800 px-6">
      <section className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 mx-auto py-8">
        <div className="col-span-1 lg:col-span-2 mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold">Orchestre Philharmonique du Maroc</h1>
          <h2 className="text-base">est soutenu par la Fondation Tenor pour la Culture</h2>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {footerItems.map((itemCollection, collectionIndex) => (
          <div key={collectionIndex} className="col-span-1 mb-4 lg:mb-0">
            <ul>
              {itemCollection.map((item, index) => (
                <li key={`${collectionIndex}|${index}`} className="mb-2">
                  <Link href={item.href} className="text-white hover:text-gray-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Divider />
      <section className="text-sm text-center text-slate-500 select-none py-4">
        Copyright © {new Date().getFullYear() || "2024"} - Tous droits réservés par l'Orchestre Philharmonique du Maroc
      </section>
    </footer>
  );
};
