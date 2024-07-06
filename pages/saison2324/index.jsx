import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function SeasonPage() {
  const { season } = useRouter().query;

  return (
    <DefaultLayout>
      <h1 className={title()}>Saison {season}</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 py-8 md:py-10 w-full">
        {[
          {name: "Carnets de Vie", cat: "Concerts d'Ouverture", date: "16 - 20 octobre 2023", src: "carnets_de_vie.webp", href: "/saison2324/carnets-de-vie"},
          {name: "Exulte", cat: "Symphonique avec chœur", date: "17 - 20 décembre 2023", src: "exulte.webp", href: "/saison2324/exulte"},
          {name: "TITAN", cat: "Concerts du nouvel an", date: "16 - 20 octobre", src: "titan.webp", href: "/saison2324/titan"},
          {name: "OPM COMPETITION", cat: "Concours international", date: "16 - 20 octobre", src: "opm_competition.webp", href: "/saison2324/opm-competition"},
          {name: "FOLK SONGS", cat: "Ensemble vocal", date: "16 - 20 octobre", src: "folk_songs.webp", href: "/saison2324/folk-songs"},
          {name: "PRINTEMPS MUSICAL DES AIZÉS", cat: "FESTIVAL", date: "18 - 21 avril 2024", src: "aizes.webp", href: "/saison2324/printemps-musical"},
        ].map((exhibit, index) => (
          <div className="w-full px-4" key={index}>
            <Link href={exhibit.href} passHref>
              <Card isPressable className="w-full min-h-96 py-4">
                <CardHeader className="grid grid-cols-1 lg:grid-cols-3 items-start text-start pb-0 pt-2 px-4">
                  <div className="lg:col-span-2">
                    <h1 className="font-bold text-2xl">{exhibit.name.toUpperCase()}</h1>
                  </div>
                  <div className="col-span-1 lg:text-end">
                    <p className="text-tiny uppercase font-bold">{exhibit.cat}</p>
                    <small className="text-default-500">{exhibit.date} {season}</small>
                  </div>
                </CardHeader>
                <CardBody className="overflow-hidden py-2 flex justify-center items-center">
                  <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    <Image
                      alt="Card background"
                      className="object-cover w-full h-full"
                      src={`/${exhibit.src}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
}
