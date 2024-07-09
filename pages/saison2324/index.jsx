import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from 'next/link';
import dbconn from "../api/dbconn";

export default function SeasonPage({exhibits}) {

  return (
    <DefaultLayout>
      <div className="grid justify-center pt-8">
        <h1 className={title()}>Saison 23/24</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 py-8 md:py-10 w-full">
        {exhibits.map((exhibit, index) => (
          <div className="w-full px-4" key={index}>
            <Link href={`/saison2324/${exhibit.href}`} passHref>
              <Card isPressable className="w-full min-h-96 py-4">
                <CardHeader className="grid grid-cols-1 lg:grid-cols-3 items-start text-start pb-0 pt-2 px-4">
                  <div className="lg:col-span-2">
                    <h1 className="font-bold text-2xl">{exhibit.name.toUpperCase()}</h1>
                  </div>
                  <div className="col-span-1 lg:text-end">
                    <p className="text-tiny uppercase font-bold">{exhibit.category}</p>
                    {/* <small className="text-default-500">{dateFormatter(exhibit.startDate, exhibit.endDate)}</small> */}
                    <small className="text-default-500">Date Placeholder</small>
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

export async function getServerSideProps() {
  try {
    console.time('getServerSideProps'); // Start timing the function execution


    console.time('dbcon');
    const client = await dbconn();
    console.timeEnd('dbcon');
    console.time('fetchData');
    const exhibits = await client.collection('saison2324').getFullList({
      // expand: 'details'
    });
    console.timeEnd('fetchData');

    const currentDate = new Date();
    console.time('sorting');
    // exhibits.sort((a, b) => {
    //   // Sort by end date, descending
    //   if (new Date(a.endDate) > new Date(b.endDate)) return -1;
    //   if (new Date(a.endDate) < new Date(b.endDate)) return 1;
    //   return 0;
    // });
    console.timeEnd('sorting');

    console.timeEnd('getServerSideProps'); // End timing the function execution

    return {
      props: { exhibits }
    };
  } catch (error) {
    console.error('Error fetching exhibits:', error);
    return {
      props: { exhibits: [] }
    };
  }
}




function dateFormatter(startDateStr, endDateStr) {
  const monthNamesFrench = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth();
  const startYear = startDate.getFullYear();

  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth();
  const endYear = endDate.getFullYear();

  let formattedDate;
  if (startMonth === endMonth && startYear === endYear) {
    formattedDate = `${startDay} - ${endDay} ${monthNamesFrench[startMonth]} ${startYear}`;
  } else if (startYear === endYear) {
    formattedDate = `${startDay} ${monthNamesFrench[startMonth]} - ${endDay} ${monthNamesFrench[endMonth]} ${startYear}`;
  } else {
    formattedDate = `${startDay} ${monthNamesFrench[startMonth]} ${startYear} - ${endDay} ${monthNamesFrench[endMonth]} ${endYear}`;
  }

  return formattedDate;
}
