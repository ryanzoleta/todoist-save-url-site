import { kv } from '@vercel/kv';
import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { code } = json;

  const clientId = await kv.get('todoist_api_client_id');
  const clientSecret = await kv.get('todoist_api_client_secret');

  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
  };

  try {
    const response = await axios.post('https://todoist.com/oauth/access_token', data);
    return NextResponse.json({ code: json['code'], token: response.data });
  } catch (e) {
    if (e instanceof AxiosError) {
      return NextResponse.json({ error: e.message, response: e.response?.data });
    }
    return NextResponse.json({ error: 'Unknown error' });
  }
}
