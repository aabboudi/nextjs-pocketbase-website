import React from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import dbconn from "../api/dbconn";

export default function AboutPage({ users }) {
  console.log(users)
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <div>{users.length}</div>
          <div>{users[0].name}</div>
          <Image
              alt={`Image de`}
              className="w-full object-cover"
              height={200}
              src={`https://poypoy.pockethost.io/api/files/${users[0].collectionId}/${users[0].id}/${users[0].image}`}
              width={200}
            />
        </div>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  try {
    const client = await dbconn();
    const users = await client.collection('saison2324').getFullList();

    return {
      props: { users }
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: { users: [] }
    };
  }
}
