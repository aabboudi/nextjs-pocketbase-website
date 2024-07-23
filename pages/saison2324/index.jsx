import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from 'next/link';
import dbconn from "../api/dbconn";

import { formatDateRange } from "../api/util";

export default function SeasonPage({ exhibits }) {
  return (
    <DefaultLayout>
      <div className="grid justify-center pt-8">
        <h1 className={title()}>Saison 23/24</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 py-8 md:py-10 w-full">
        {exhibits.map((exhibit, index) => (
          <div className="w-full h-full" key={index}>
            <Link href={`/saison2324/${exhibit.href}`} passHref>
              <Card isPressable className="w-full h-full min-h-96 py-4">
                <CardHeader className="grid grid-cols-1 lg:grid-cols-3 items-start text-start pb-0 pt-2 px-4">
                  <div className="lg:col-span-2">
                    <h1 className="font-bold text-2xl">{exhibit.name.toUpperCase()}</h1>
                  </div>
                  <div className="col-span-1 lg:text-end">
                    <p className="text-tiny uppercase font-bold">{exhibit.category}</p>
                    {/* <small className="text-default-500">{dateFormatter(exhibit.startDate, exhibit.endDate)}</small> */}
                    <small className="text-default-500">{formatDateRange(exhibit.expand?.details) || "Date Placeholder"}</small>
                  </div>
                </CardHeader>
                <CardBody className="overflow-hidden py-2 flex justify-center items-center">
                  <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    <Image
                      // Look into fill and sizes
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Card background"
                      className="object-cover w-full h-full"
                      src={`https://poypoy.pockethost.io/api/files/${exhibit.collectionId}/${exhibit.id}/${exhibit.image}`}
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

export async function getStaticProps() {
  try {
    const client = await dbconn();
    const exhibits = await client.collection('saison2324').getFullList({
      expand: "details"
    });

    try {
      exhibits.sort((a, b) => {
        const aTime = a.expand ? new Date(a.expand.details[0].time) : new Date();
        const bTime = b.expand ? new Date(b.expand.details[0].time) : new Date();
        return new Date(aTime) - new Date(bTime);
      });
    } catch (error) {
      console.log(error.message);
    }
    console.log(exhibits[0].expand.details);

    return {
      props: { exhibits },
      revalidate: 60
    };
  } catch (error) {
    console.error('Error fetching exhibits:', error);
    return {
      props: { exhibits: [] },
      revalidate: 60
    };
  }
}
