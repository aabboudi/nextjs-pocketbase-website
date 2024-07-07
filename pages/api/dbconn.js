import PocketBase from 'pocketbase';

const url = 'https://poypoy.pockethost.io/';
const client = new PocketBase(url);

export default async function dbconn() {
  try {
    await client.admins.authWithPassword('abboudi.abdellah@gmail.com', 'poypoy123');
    return client;
  } catch (error) {
    console.error('Error authenticating with PocketBase:', error);
    throw error;
  }
}
