import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function SeasonPage() {
  const router = useRouter();
  const { season } = router.query;

  return (
    <DefaultLayout>
      <h1 className={title()}>Saison {season}</h1>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10 w-full">
        <div className="w-full md:w-1/2 px-4">
          <Card isPressable className="w-full max-h-96 lg:max-h-80 py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Concerts d'ouverture</p>
              <small className="text-default-500">16 - 20 octobre {season}</small>
              <h4 className="font-bold text-large">CARNETS DE VIE</h4>
            </CardHeader>
            <CardBody className="overflow-hidden py-2 flex justify-center items-center">
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image
                  alt="Card background"
                  className="object-cover w-full h-full"
                  src="/opm-histoire-1.webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <Card isPressable className="w-full max-h-96 lg:max-h-80 py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Symphonique avec chœur</p>
              <small className="text-default-500">17 - 20 décembre {season}</small>
              <h4 className="font-bold text-large">EXULTE</h4>
            </CardHeader>
            <CardBody className="overflow-hidden py-2 flex justify-center items-center">
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image
                  alt="Card background"
                  className="object-cover w-full h-full"
                  src="/opm-histoire-1.webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
