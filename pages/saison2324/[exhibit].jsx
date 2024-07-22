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
import { formatDate } from '../api/util';

export default function Exhibit({ exhibitDetails }) {

  if (!exhibitDetails) {
    return (
      <DefaultLayout>
        <h1>Exhibit Not Found</h1>
      </DefaultLayout>
    );
  }

  const [isVertical, setIsVertical] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) { setIsVertical(true) }
    else { setIsVertical(false) }
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedOption, setSelectedOption] = React.useState(new Set(["Catégorie 1"]));

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <DefaultLayout pageTitle={exhibitDetails.name}>
      <div className="grid justify-center">
        <h1>{exhibitDetails.category}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-3">
        <div className="grid justify-center lg:justify-start">
          <Tabs aria-label="Options" isVertical={isVertical} className="grid justify-center">

            {exhibitDetails.expand.details.map((exhibitSet, index) => (
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
                          onSelectionChange={setSelectedOption}
                          className="max-w-[300px]"
                        >
                          {
                          Object.entries({
                            "Catégorie 1": exhibitSet.expand.fee.fee_cat1,
                            "Catégorie 2": exhibitSet.expand.fee.fee_cat2,
                            "Etudiant": exhibitSet.expand.fee.fee_etud,
                          }).map(([fee_category, fee]) => (
                            fee && <DropdownItem key={fee_category} description={`${fee} DH`}>
                              {fee_category}
                            </DropdownItem>
                          ))}
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
            isBlurred
            width={1000}
            height={1000}
            alt="Card background"
            className="object-cover"
            src={`https://poypoy.pockethost.io/api/files/${exhibitDetails.collectionId}/${exhibitDetails.id}/${exhibitDetails.image}`}
          />
        </div>
          
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const client = await dbconn();
    let exhibitDetails = await client.collection('saison2324').getFullList({
      filter: `href="${query.exhibit}"`,
      expand: "details,details.fee"
    });

    exhibitDetails = exhibitDetails[0] || null;
    exhibitDetails ? exhibitDetails.expand.details.sort((a, b) => new Date(a.time) - new Date(b.time)) : 1;

    return { props: { exhibitDetails } };
  } catch {
    return { notFound: true };
  }
}
