import PocketBase from 'pocketbase';

const url = process.env.POCKETBASE_URL!;
const email = process.env.POCKETBASE_EMAIL!;
const password = process.env.POCKETBASE_PASSWORD!;
let sessionToken = process.env.POCKETBASE_SESSION_TOKEN;

const client = new PocketBase(url);

async function authenticateAndUpdateToken(): Promise<string | undefined> {
  try {
    const authData = await client.admins.authWithPassword(email, password);
    const newToken = authData.token;

    process.env.POCKETBASE_SESSION_TOKEN = newToken;
    sessionToken = newToken;

    return newToken;
  } catch (error) {
    console.error('DBCONN: Error authenticating with PocketBase:', error);
  }
}

export default async function dbconn(): Promise<PocketBase | undefined> {
  try {
    if (sessionToken) {
      console.log('DBCONN: Found token, connection established.');
      client.authStore.save(sessionToken);

      if (!client.authStore.isValid) {
        console.log('DBCONN: Token is invalid, re-authenticating...');
        await authenticateAndUpdateToken();
      }
    } else {
      console.log('DBCONN: No session token found, authenticating...');
      await authenticateAndUpdateToken();
    }

    return client;
  } catch (error) {
    console.error('DBCONN: Error establishing PocketBase connection:', error);
  }
}
