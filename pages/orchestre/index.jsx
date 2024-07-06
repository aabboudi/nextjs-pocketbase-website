import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";
import {Card, CardBody} from "@nextui-org/card";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Orchestre</h1>
        </div> */}
        <div>
          <Image
            isBlurred
            width={'100%'}
            height={'auto'}
            alt="OPM in action"
            src="/opm-histoire-0.webp"
          />
        </div>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-center gap-4 py-8 md:py-10 w-full">
          {/* Title and text on the left for lg screens, full width on small screens */}
          <div className="lg:w-1/2 w-full text-center lg:text-left p-4">
            <h1 className={title()}>L'Orchestre<br />Phlharmonique<br />du Maroc</h1>
            <div>
              <Card>
                <CardBody>
                <p className="text-justify">
                  Créé en 1996, l'Orchestre Philharmonique du Maroc est composé de quatre-vingts musiciens professionnels. A chaque saison, l'Orchestre donne une cinquantaine de concerts, offrant ainsi à son public une grande variété de programmes sur trois siècles de musique, du grand répertoire symphonique à la musique contemporaine, en passant par l'opéra et la musique de chambre. <br /><br /> Cet ancrage dans le paysage culturel marocain a permis de donner ses lettres de noblesse à la profession de musicien. En 2014 l'Orchestre Philharmonique du Maroc a été reconnu association d'utilité publique. En 26 ans d'existence, l'OPM est devenu la référence en matière de musique classique au Maroc.
                </p>
                </CardBody>
              </Card>
            </div>
          </div>
          {/* Image on the right for lg screens, full width on small screens */}
          <div className="lg:w-1/2 w-full flex justify-start">
            <Image
              className="w-full h-auto"
              alt="OPM in action"
              src="/opm-histoire-1.webp"
            />
          </div>
        </section>
    </DefaultLayout>
  );
}
