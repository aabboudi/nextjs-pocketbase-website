import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
  
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap px-6">
        <div className="w-full lg:w- mb-6 lg:mb-0">
          <h1 className={title()}>Orchestre Philharmonique du Maroc</h1>
          <h2 className={subtitle({ color: "white" })}>est soutenu par la Fondation Tenor pour la culture</h2>
        </div>

        <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
          <ul>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 1</Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 2</Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 3</Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/6">
          <ul>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 4</Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 5</Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-400">Link 6</Link>
            </li>
          </ul>
        </div>
      </div>

    </footer>
    // <footer className="w-full flex items-center justify-center py-3">
    //   <Link
    //     isExternal
    //     className="flex items-center gap-1 text-current"
    //     href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
    //     title="nextui.org homepage"
    //   >
    //     <span className="text-default-600">Powered by</span>
    //     <p className="text-primary">NextUI</p>
    //   </Link>
    // </footer>
  );
};
