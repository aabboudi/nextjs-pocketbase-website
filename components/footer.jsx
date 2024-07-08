import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
  
export const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-1 lg:grid-cols-4 mx-auto px-6 bg-gray-800 text-white gap-4 py-8">
      <div className="col-span-1 lg:col-span-2 mb-6 lg:mb-0">
        <h1 className="text-3xl font-bold">Orchestre Philharmonique du Maroc</h1>
        <h2 className="text-base">est soutenu par la Fondation Tenor pour la culture</h2>
      </div>

      <div className="col-span-1 mb-6 lg:mb-0">
        <ul>
          <li className="mb-2">
            <Link href="#" className="text-white hover:text-gray-400">Conditions générales de vente</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-white hover:text-gray-400">Link 2</Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-white hover:text-gray-400">Link 3</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-1">
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

    </footer>
  );
};
