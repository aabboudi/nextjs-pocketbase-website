import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";

import { Card, CardHeader, CardFooter } from "@nextui-org/card";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>
      </section> */}
      <section className="relative h-screen w-full">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/opm-inaction.webp"
            alt="Background Image"
            layout="fill"
            quality={100}
            className="absolute inset-0 z-0 rounded-large object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-large"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
          {/* <h1 className="text-4xl md:text-6xl font-bold">Orchestre Philharmonique du Maroc</h1> */}
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Orchestre</h1>
            <br />
            <h1 className={title()}>Philharmonique</h1>
            <br />
            <h1 className={title({ color: "blue" })}>du Maroc</h1>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="flex justify-center py-8"><h1 className={title()}>Nos chefs invités</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-center">
          {[
            { name: "Wolfgang Doerner", country: "Autriche", src: "/conductors/wolfgang_doerner_austria.webp" },
            { name: "Ivan Yohan",       country: "Indonésie",       src: "/conductors/ivan_yohan_indonesia.webp" },
            { name: "Mehdi Lougraida",  country: "France",  src: "/conductors/mehdi_lougraida_france.webp" },
            { name: "Dina Bensaid",     country: "Maroc",     src: "/conductors/dina_bensaid_maroc.webp" },
            { name: "Olivier Holt",     country: "France",     src: "/conductors/olivier_holt_france.webp" },
          ].map((composer, index) => (
            <Card
            key={index}
            radius="lg"
            className="w-full flex flex-col items-center border-none"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white uppercase font-bold text-large">{composer.name}</h4>
              <p className="text-tiny text-white/60 uppercase font-bold">{composer.country}</p>
            </CardHeader>
            <Image
              alt={`Image de ${composer.name}`}
              className="w-full object-cover"
              height={200}
              src={composer.src}
              width={200}
            />
          </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
