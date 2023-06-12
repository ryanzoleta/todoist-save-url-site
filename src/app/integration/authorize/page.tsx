import Redirector from './redirector';
import { kv } from '@vercel/kv';

async function getUrl() {
  const clientId = await kv.get('todoist_api_client_id');
  const state = await kv.get('todoist_api_state');
  const scopes = await kv.get('todoist_api_scopes');
  return `https://todoist.com/oauth/authorize?client_id=${clientId}&scope=${scopes}&state=${state}`;
}

export default async function AuthorizePage() {
  const url = await getUrl();

  return (
    <main className="w-1/2 p-2">
      <p>Redirecting to todoist oauth page...</p>
      <Redirector url={url} />
    </main>
  );
}
