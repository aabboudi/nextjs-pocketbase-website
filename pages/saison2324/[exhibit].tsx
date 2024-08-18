import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/layouts/default";
import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { LocationDotIcon, CalendarIcon, ChevronDownIcon } from "@/components/icons";

import dbconn from "../api/dbconn";
import { formatDate } from '../api/utils';

interface ExhibitDetails {
  id: string;
  name: string;
  category: string;
  collectionId: string;
  image: string;
  description: string;
  expand?: {
    details?: Array<{
      id: string;
      location: string;
      time: string;
      expand?: {
        fee?: {
          fee_cat1?: string;
          fee_cat2?: string;
          fee_etud?: string;
        }
      }
    }>;
  };
}

interface Props {
  exhibitDetails: ExhibitDetails | null;
  endpoint: string;
}

export default function Exhibit({ exhibitDetails, endpoint }: Props) {
  if (!exhibitDetails) {
    return (
      <DefaultLayout>
        <h1>Exhibit Not Found</h1>
      </DefaultLayout>
    );
  }

  const [isVertical, setIsVertical] = useState<boolean>(false);

  const handleResize = () => {
    setIsVertical(window.innerWidth >= 1024);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedOption, setSelectedOption] = React.useState<Set<string>>(new Set(["Catégorie 1"]));

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  const handleSelectionChange = (
    keys: "all" | Set<React.Key> & { anchorKey?: string; currentKey?: string }
  ) => {
    if (keys !== "all" && keys instanceof Set) {
      const keysArray = Array.from(keys);
      setSelectedOption(new Set(keysArray as string[]));
    }
  };

  return (
    <DefaultLayout pageTitle={exhibitDetails.name}>
      <div className="grid justify-center">
        <h1>{exhibitDetails.category}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-3">
        <div className="grid justify-center lg:justify-start">
          <Tabs aria-label="Options" isVertical={isVertical} className="grid justify-center">
            {exhibitDetails?.expand?.details?.map((exhibitSet) => (
              <Tab key={exhibitSet.id} title={exhibitSet.location.split('|')[0].trim()} className="justify-center">
                <Card className="max-w-[400px] lg:max-w-[600px] mx-auto">
                  <CardBody className=''>
                    <div className='flex justify-center lg:justify-start'><LocationDotIcon size={24} />{exhibitSet.location.split('|')[1].trim()}</div>
                    <div className='flex justify-center lg:justify-start'><CalendarIcon size={24} />
                      {(() => {
                        const [formattedDate, formattedTime] = formatDate(exhibitSet.time);
                        return `${formattedDate} à ${formattedTime}`;
                      })()}
                    </div>
                  </CardBody>

                  <Divider />

                  <CardFooter className='flex justify-around text-center items-stretch'>
                    <ButtonGroup variant="flat">
                      <Button>{`Réserver ${selectedOptionValue}`}</Button>
                      <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                          <Button isIconOnly><ChevronDownIcon /></Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          disallowEmptySelection
                          aria-label="Ticket options"
                          selectedKeys={selectedOption}
                          selectionMode="single"
                          onSelectionChange={handleSelectionChange}
                          className="max-w-[300px]"
                        >
                          {
                            Object.entries({
                              "Catégorie 1": exhibitSet?.expand?.fee?.fee_cat1 ?? 0,
                              "Catégorie 2": exhibitSet?.expand?.fee?.fee_cat2 ?? 0,
                              "Etudiant": exhibitSet?.expand?.fee?.fee_etud ?? 0,
                            })
                              .filter(([_, fee]) => fee)
                              .map(([fee_category, fee]) => (
                                <DropdownItem key={fee_category} description={`${fee} DH`}>
                                  {fee_category}
                                </DropdownItem>
                              ))
                          }
                        </DropdownMenu>
                      </Dropdown>
                    </ButtonGroup>
                  </CardFooter>

                </Card>
              </Tab>
            ))}
          </Tabs>

          <div dangerouslySetInnerHTML={{ __html: exhibitDetails.description }} />
        </div>

        <div>
          <Image
            width={1000}
            height={1000}
            alt="Card background"
            className="object-cover"
            src={`${endpoint}/${exhibitDetails.collectionId}/${exhibitDetails.id}/${exhibitDetails.image}`}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ query }: { query: { exhibit: string } }) {
  try {
    const client = await dbconn();

    if (!client) {
      throw new Error("Client is undefined");
    }

    let exhibitDetailsArray = await client.collection('saison2324').getFullList({
      filter: `href="${query.exhibit}"`,
      expand: "details,details.fee"
    });

    const exhibitDetails = exhibitDetailsArray[0] || null;
    exhibitDetails ? exhibitDetails.expand?.details?.sort((a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime()) : 1;

    const endpoint = process.env.POCKETBASE_ENDPOINT!;

    return { props: { exhibitDetails, endpoint } };
  } catch {
    return { notFound: true };
  }
}
