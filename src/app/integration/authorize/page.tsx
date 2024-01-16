import { track } from '@vercel/analytics/server';
import Redirector from './redirector';
import { kv } from '@vercel/kv';

async function getUrl() {
  // todo: change these to .env variables
  const clientId = await kv.get('todoist_api_client_id');
  const state = await kv.get('todoist_api_state');
  const scopes = await kv.get('todoist_api_scopes');
  return `https://todoist.com/oauth/authorize?client_id=${clientId}&scope=${scopes}&state=${state}`;
}

export default async function AuthorizePage() {
  const url = await getUrl();

  track('OAuthInit');

  return (
    <main className="h-screen text-center">
      <p className="h-full align-middle text-lg font-bold">Redirecting to todoist oauth page...</p>
      <Redirector url={url} />
    </main>
  );
}
