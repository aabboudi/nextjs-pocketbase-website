import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';

import { LocationDotIcon, CalendarIcon } from "@/components/icons";

import { ChevronDownIcon } from '@/components/icons';

export default function Exhibit() {
  const router = useRouter();
  const { exhibit } = router.query;
  // console.log(exhibit);

  // const exhibitData = exhibits[exhibit];

  // if (!exhibitData) {
  //   return (
  //     <DefaultLayout>
  //       <h1>Exhibit Not Found</h1>
  //     </DefaultLayout>
  //   );
  // }

  // return (
  //   <DefaultLayout>
  //     <p>{exhibitData.cat}</p>
  //     <h1>{exhibitData.name}</h1>
  //     <p>{exhibitData.date}</p>
  //     <img src={`/${exhibitData.src}`} alt={exhibitData.name} />
  //   </DefaultLayout>
  // );

    const [isVertical, setIsVertical] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg screens
        setIsVertical(true);
      } else { // sm screens
        setIsVertical(false);
      }
    };
  
    useEffect(() => {
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [selectedOption, setSelectedOption] = React.useState(new Set(["cat1"]));

    const descriptionsMap = {
      cat1: "250 DH",
      cat2: "200 DH",
      etud: "80 Dh",
    };
  
    const labelsMap = {
      cat1: "Catégorie 1",
      cat2: "Catégorie 2",
      etud: "Etudiant",
    }
  
    // Convert the Set to an Array and get the first value.
    const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <DefaultLayout pageTitle={exhibit}>
      <h1></h1>
      <h1>CHŒUR & ORCHESTRE PHILHARMONIQUE DU MAROC </h1>



      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid justify-center">
          <Tabs aria-label="Options" isVertical={isVertical} className="grid justify-center">
            <Tab key="tanger" title="Tanger" className="justify-center">
              <Card className="max-w-[400px] lg:max-w-[600px] mx-auto">
                <CardBody className=''>
                  <div className='flex justify-center lg:justify-start'><LocationDotIcon size={24} />Centre Culturel Ahmed Boukmakh</div>
                  <div className='flex justify-center lg:justify-start'><CalendarIcon size={24} />Dimanche 17 déc. 2023 - 16h</div>
                </CardBody>
                <Divider />
                <CardFooter className='flex justify-around text-center items-stretch'>
                  <ButtonGroup variant="flat">
                    <Button>{`Réserver ${labelsMap[selectedOptionValue]}`}</Button>
                    <Dropdown placement="bottom-end">
                      <DropdownTrigger>
                        <Button isIconOnly>
                          <ChevronDownIcon />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        disallowEmptySelection
                        aria-label="Merge options"
                        selectedKeys={selectedOption}
                        selectionMode="single"
                        onSelectionChange={setSelectedOption}
                        className="max-w-[300px]"
                      >
                        <DropdownItem key="cat1" description={descriptionsMap["cat1"]}>
                          {labelsMap["cat1"]}
                        </DropdownItem>
                        <DropdownItem key="cat2" description={descriptionsMap["cat2"]}>
                          {labelsMap["cat2"]}
                        </DropdownItem>
                        <DropdownItem key="etud" description={descriptionsMap["etud"]}>
                          {labelsMap["etud"]}
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Tab>
          </Tabs>
          <div>Lorem ipsum</div>
        </div>

        <Image
          width={1000}
          height={1000}
          alt="Card background"
          className="object-cover w-96 f-96"
          src="/exulte.webp"
        />
      </div>
    </DefaultLayout>
  );
}
