import PocketBase from 'pocketbase';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const url = 'https://poypoy.pockethost.io/';
const client = new PocketBase(url);

const sessionToken = process.env.POCKETBASE_SESSION_TOKEN;
const email = process.env.POCKETBASE_EMAIL;
const password = process.env.POCKETBASE_PASSWORD;

async function authenticateAndUpdateToken() {
  try {
    const authData = await client.admins.authWithPassword(email, password);
    const newToken = authData.token;
    process.env.POCKETBASE_SESSION_TOKEN = newToken;
    
    // Update .env file with the new token
    const envPath = path.join(__dirname, '.env');
    console.log(envPath);
    const envContent = `
      POCKETBASE_SESSION_TOKEN=${newToken}
      POCKETBASE_EMAIL=${email}
      POCKETBASE_PASSWORD=${password}
    `;
    fs.writeFileSync(envPath, envContent.trim());

    return newToken;
  } catch (error) {
    console.error('Error authenticating with PocketBase:', error);
  }
}

export default async function dbconn() {
  try {
    if (sessionToken) {
      client.authStore.save(sessionToken, "admin");
      if (!client.authStore.isValid) {
        console.log('Token is not valid, re-authenticating...');
        await authenticateAndUpdateToken();
      }
    } else {
      console.log('No session token found, authenticating...');
      await authenticateAndUpdateToken();
    }
    return client;
  } catch (error) {
    console.error('Error using session token with PocketBase:', error);
  }
}
